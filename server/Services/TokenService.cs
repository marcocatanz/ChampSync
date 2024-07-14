using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using server.Interfaces;
using server.Models;

namespace server.Services
{
    public class TokenService: ITokenService
    {
        private readonly IConfiguration _config;
        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config)
        {
            _config = config;
            if(_config == null)
            {
                throw new ArgumentNullException("_config");
            }
            string? signingKey = _config["JWT:SigningKey"];
            if(signingKey == null) 
            {
                throw new ArgumentNullException("signingKey");
            }
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(signingKey));

        }
        public string CreateToken(User user){
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.GivenName, user.FirstName ),
                new Claim(JwtRegisteredClaimNames.FamilyName, user.LastName),
            };

            SigningCredentials credentials = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);
            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = credentials,
                Issuer = _config["JWT:Issuer"],
                Audience = _config["JWT:Audience"]
            };

            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}