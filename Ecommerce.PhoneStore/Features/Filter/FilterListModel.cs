using System.Collections.Generic;

namespace Ecommerce.PhoneStore.Features.Filter
{
    public class FilterListModel
    {
        public IEnumerable<string> Brands { get; set; }
        public IEnumerable<string> Storage { get; set; }
        public IEnumerable<string> Colours { get; set; }
        public IEnumerable<string> OS { get; set; }
        public IEnumerable<string> Features { get; set; }
    }
}
