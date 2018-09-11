#region using
using System.Linq;
using System.Threading.Tasks;
using Ecommerce.Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
#endregion

namespace Ecommerce.PhoneStore.Features.Filter
{
    [Route("[controller]")]
    [ApiController]
    public class FilterController : ControllerBase
    {
        private readonly EcommerceContext _dbContext;

        public FilterController(EcommerceContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var brands = await _dbContext.Brands
              .Select(x => x.Name)
              .ToListAsync();

            var storage = await _dbContext.Storages
              .Select(x => $"{x.Capacity}GB")
              .ToListAsync();

            var colours = await _dbContext.Colours
              .Select(x => x.Name)
              .ToListAsync();

            var os = await _dbContext.OS
              .Select(x => x.Name)
              .ToListAsync();

            var features = await _dbContext.Features
              .Select(x => x.Name)
              .ToListAsync();

            return Ok(new FilterListModel
            {
                Brands = brands,
                Storage = storage,
                Colours = colours,
                OS = os,
                Features = features
            });
        }
    }
}