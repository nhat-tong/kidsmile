using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Ecommerce.Core.Entities;
using Microsoft.AspNetCore.Identity;

namespace Ecommerce.Infrastructure.Data
{
  public class AppUser : IdentityUser<Guid>
  {
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string RefreshToken { get; set; }

    [NotMapped]
    public string FullName
    {
      get { return $"{FirstName} {LastName}"; }
    }

    public List<Order> Orders { get; set; } = new List<Order>();
  }
}