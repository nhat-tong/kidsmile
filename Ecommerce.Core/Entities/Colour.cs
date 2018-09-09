using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ecommerce.Core.Entities
{
  public class Colour
  {
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }

    public List<ProductVariant> ProductVariants { get; set; } = new List<ProductVariant>();
  }
}