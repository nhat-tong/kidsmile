using System.Collections.Generic;

namespace Ecommerce.PhoneStore.Features.Catalog
{
    public class ProductDetailModel
    {
        public int Id { get; set; }
        public string Slug { get; set; }
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string Thumbnail { get; set; }
        public IEnumerable<string> Images { get; set; }
        public IEnumerable<string> Features { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public IEnumerable<ProductVariantModel> Variants { get; set; }
    }
}
