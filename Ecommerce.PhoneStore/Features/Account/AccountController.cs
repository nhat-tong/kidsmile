#region using
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Ecommerce.Core.Shared;
using Ecommerce.Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
#endregion

namespace Ecommerce.PhoneStore.Features.Account
{
    [Route("[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly EcommerceContext _dbContext;
        private readonly UserManager<AppUser> _userManager;
        private SignInManager<AppUser> _signInManager;
        private readonly AuthenticationOption _authOption;

        public AccountController(EcommerceContext context, UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IOptions<AuthenticationOption> authOptions)
        {
            _dbContext = context;
            _userManager = userManager;
            _signInManager = signInManager;
            _authOption = authOptions.Value;
        }

        #region Register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]RegisterModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var email = model.Email.ToLowerInvariant();
            var user = await _userManager.FindByEmailAsync(email);

            if (user != null) return BadRequest("A user with that email address already exists!");

            user = new AppUser
            {
                Email = email,
                EmailConfirmed = true,
                UserName = email,
                LockoutEnabled = true,
                RefreshToken = Guid.NewGuid().ToString()
            };
            var registerResult = await _userManager.CreateAsync(user, model.Password);

            if (!registerResult.Succeeded) return BadRequest(registerResult.Errors);

            await _userManager.AddToRoleAsync(user, "Customer");

            return Ok();
        }
        #endregion

        #region Login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]LoginModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var email = model.Email.ToLowerInvariant();
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null) return BadRequest("Invalid e-mail address and/or password");

            if (await _userManager.IsLockedOutAsync(user)) return BadRequest("User is blocked!");

            var result = await _signInManager.PasswordSignInAsync(user, model.Password, true, true);
            if (!result.Succeeded) return BadRequest("Invalid e-mail address and/or password");

            var token = await GenerateToken(user);
            return Ok(token);
        }

        private async Task<TokenModel> GenerateToken(AppUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName)
            };

            var roles = await _userManager.GetRolesAsync(user);
            foreach(var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authOption.JwtKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddMinutes(_authOption.JwtExpireMins);

            var token = new JwtSecurityToken(_authOption.JwtIssuer, _authOption.JwtAudience, claims, expires: expires, signingCredentials: creds);

            var refreshToken = Convert.ToBase64String(Guid.NewGuid().ToByteArray());
            user.RefreshToken = refreshToken;
            await _userManager.UpdateAsync(user);

            return new TokenModel
            {
                AccessToken = new JwtSecurityTokenHandler().WriteToken(token),
                RefreshToken = refreshToken,
                Roles = roles
            };
        }
        #endregion

        #region Refreshtoken
        [HttpPost("refresh")]
        public async Task<IActionResult> Refreshtoken([FromBody] RefreshTokenModel model)
        {
            if (!ModelState.IsValid) return BadRequest();

            var user = await _dbContext.Users.SingleOrDefaultAsync(x => x.RefreshToken == model.RefreshToken);

            if (user == null) return BadRequest();

            var token = await GenerateToken(user);
            return Ok(token);
        }
        #endregion
    }
}