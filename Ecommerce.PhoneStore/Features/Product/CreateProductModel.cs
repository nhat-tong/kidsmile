using System.Collections.Generic;

namespace Ecommerce.PhoneStore.Features.Product
{
    public class CreateProductModel
    {
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public decimal TalkTime { get; set; }
        public decimal StandbyTime { get; set; }
        public decimal ScreenSize { get; set; }
        public string Brand { get; set; }
        public string OS { get; set; }
        public List<string> Features { get; set; }
        public List<CreateProductVariantModel> Variants { get; set; }
    }
}
