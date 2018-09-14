#region using
using System;
using System.Linq;
using System.Threading.Tasks;
using Ecommerce.Core.Entities;
using Ecommerce.Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Stripe;
#endregion

namespace Ecommerce.PhoneStore.Features.Order
{
    [Route("[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly EcommerceContext _dbContext;
        private readonly UserManager<AppUser> _userManager;

        public OrderController(EcommerceContext context, UserManager<AppUser> userManager)
        {
            _dbContext = context;
            _userManager = userManager;
        }

        #region Get
        [HttpGet]
        public async Task<IActionResult> List()
        {
            var user = await _userManager.FindByEmailAsync(User.Identity.Name);
            if (user == null) return BadRequest();

            var orders = await _dbContext.Orders
              .Where(x => User.IsInRole("Admin") || x.AppUserId == user.Id)
              .Select(x => new OrderListModel
              {
                  Id = x.Id,
                  Customer = user.FullName,
                  Placed = x.Placed,
                  Items = x.Items.Sum(i => i.Quantity),
                  Total = x.Items.Sum(i => i.ProductVariant.Price * i.Quantity),
                  PaymentStatus = Enum.GetName(typeof(PaymentStatus), x.PaymentStatus)
              })
              .ToListAsync();

            return Ok(orders);
        }
        #endregion

        #region Post
        [Authorize(Roles = "Customer")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] OrderModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = await _dbContext.Users.SingleAsync(x => x.UserName == HttpContext.User.Identity.Name);
            if (user == null) return BadRequest();

            var order = new Core.Entities.Order
            {
                DeliveryAddress = new Address
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Address1 = model.Address1,
                    Address2 = model.Address2,
                    TownCity = model.TownCity,
                    County = model.County,
                    Postcode = model.PostCode
                },
                Items = model.Items.Select(x => new OrderItem
                {
                    ProductId = x.ProductId,
                    ColourId = x.ColourId,
                    StorageId = x.StorageId,
                    Quantity = x.Quantity
                }).ToList()
            };

            user.Orders.Add(order);

            await _dbContext.SaveChangesAsync();

            var total = await _dbContext.Orders
              .Where(x => x.Id == order.Id)
              .Select(x => Convert.ToInt32(x.Items.Sum(i => i.ProductVariant.Price * i.Quantity) * 100))
              .SingleAsync();

            var charges = new StripeChargeService();
            var charge = await charges.CreateAsync(new StripeChargeCreateOptions
            {
                Amount = total,
                Description = $"Order {order.Id} payment",
                Currency = "EUR",
                SourceTokenOrExistingSourceId = model.StripeToken
            });

            if (string.IsNullOrEmpty(charge.FailureCode))
            {
                order.PaymentStatus = PaymentStatus.Paid;
            }
            else
            {
                order.PaymentStatus = PaymentStatus.Declined;
            }

            await _dbContext.SaveChangesAsync();

            return Ok(new OrderResultModel(order.Id, order.PaymentStatus));
        }
    }
    #endregion
}