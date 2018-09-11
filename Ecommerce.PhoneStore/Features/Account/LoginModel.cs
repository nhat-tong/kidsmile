using System.ComponentModel.DataAnnotations;

namespace Ecommerce.PhoneStore.Features.Account
{
    public class LoginModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
