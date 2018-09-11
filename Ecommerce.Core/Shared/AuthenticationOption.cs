namespace Ecommerce.Core.Shared
{
    public class AuthenticationOption
    {
        public string JwtKey { get; set; }

        public string JwtIssuer { get; set; }

        public string JwtAudience { get; set; }

        public double JwtExpireMins { get; set; }
    }
}
