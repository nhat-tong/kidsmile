using Newtonsoft.Json;
using System.Collections.Generic;

namespace Ecommerce.PhoneStore.Features.Account
{
    public class TokenModel
    {
        [JsonProperty("access_token")]
        public string AccessToken { get; set; }
        [JsonProperty("refresh_token")]
        public string RefreshToken { get; set; }
        public IEnumerable<string> Roles { get; set; }
    }
}
