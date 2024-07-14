using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Azure;
using Microsoft.AspNetCore.Identity;
using server.Data;
using server.DTOs.Auth;
using server.DTOs.User;
using server.Interfaces;
using server.Models;

namespace server.Services
{
    public class AuthService: IAuthService
    {
        private readonly UserManager<User> _manager;
        private readonly ITokenService _tokenService;
        public AuthService(UserManager<User> manager, ITokenService tokenService)
        {
            _manager = manager;
            _tokenService = tokenService;
        }

     
        public async Task<RegisterUserResponse> Register(RegisterUserRequest req)
        {
            User user = new User 
            {
                Email = req.Email,
                FirstName = req.FirstName,
                LastName = req.LastName,
                UserName = req.Email,
                
            };
            IdentityResult createdUserResult = await _manager.CreateAsync(user, req.Password);
            if(createdUserResult.Succeeded)
            {
                LoggedInUserDto loggedInUser = new LoggedInUserDto
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    Token = _tokenService.CreateToken(user)
                };
                return new RegisterUserResponse
                {
                    Succeeded = true,
                    user = loggedInUser
                };
            }
            else return new RegisterUserResponse
            {
                Succeeded = false
            };
        }

        public async Task<RegisterUserResponse> Login(LoginUserRequest req)
        {
            User? user = await _manager.FindByEmailAsync(req.Email);
            if(user == null) return  new RegisterUserResponse
            {
                Succeeded = false
            };

            bool passwordValid = await _manager.CheckPasswordAsync(user, req.Password);
            if(!passwordValid) return new RegisterUserResponse
            {
                Succeeded = false
            };
            LoggedInUserDto loggedInUser = new LoggedInUserDto
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                Token = _tokenService.CreateToken(user)
            };
            return new RegisterUserResponse 
            {
                Succeeded = true,
                user = loggedInUser
            };
            
        }


    }
}