using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Ecommerce.PhoneStore.Features.Account
{
    public class RefreshTokenModel
    {
        [Required, JsonProperty("refresh_token")]
        public string RefreshToken { get; set; }
    }
}
