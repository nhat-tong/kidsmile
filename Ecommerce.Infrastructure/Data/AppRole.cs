using Microsoft.AspNetCore.Identity;
using System;

namespace Ecommerce.Infrastructure.Data
{
    public class AppRole : IdentityRole<Guid>
    {
        public AppRole() { }

        public AppRole(string name)
        {
            Name = name;
        }
    }
}