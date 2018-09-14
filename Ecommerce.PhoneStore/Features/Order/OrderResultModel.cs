using Ecommerce.Core.Entities;

namespace Ecommerce.PhoneStore.Features.Order
{
    public class OrderResultModel
    {
        public int OrderId { get; set; }
        public string PaymentStatus { get; set; }

        public OrderResultModel(int orderId, PaymentStatus paymentStatus)
        {
            OrderId = orderId;
            PaymentStatus = paymentStatus.ToString();
        }
    }
}
