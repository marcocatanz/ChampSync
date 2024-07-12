using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Azure;
using Microsoft.AspNetCore.Identity;
using server.Data;
using server.DTOs.Auth;
using server.Interfaces;
using server.Models;

namespace server.Services
{
    public class AuthService: IAuthService
    {
        private readonly UserManager<User> _manager;
        public AuthService(UserManager<User> manager)
        {
            _manager = manager;
        }

     
        public async Task<IdentityResult> Register(RegisterUserRequest req)
        {
            User user = new User 
            {
                Email = req.Email,
                FirstName = req.FirstName,
                LastName = req.LastName,
                UserName = req.Email,
                
            };
            return  await _manager.CreateAsync(user, req.Password);
        }

    }
}