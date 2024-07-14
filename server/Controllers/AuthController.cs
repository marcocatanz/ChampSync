using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using server.DTOs.Auth;
using server.Interfaces;
using server.Models;
using server.Services;

namespace server.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController: ControllerBase
    {
        private readonly IAuthService _service;
        private readonly ITokenService _tokenService;
        public AuthController(IAuthService service, ITokenService tokenService)
        {
            _service = service;
            _tokenService = tokenService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserRequest req)
        {
            try
            {
                if(!ModelState.IsValid) return BadRequest(ModelState);
                RegisterUserResponse registerUserResponse = await _service.Register(req);
                if(!registerUserResponse.Succeeded) return StatusCode(500);
                else return Ok(registerUserResponse.user);                
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);  
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginUserRequest req)
        {
            try
            {
                if(!ModelState.IsValid) return BadRequest(ModelState);
                RegisterUserResponse loginUserResponse = await _service.Login(req);
                if(!loginUserResponse.Succeeded) return StatusCode(500);
                else return Ok(loginUserResponse.user);   
            }
            catch (Exception e)
            {
                
                return StatusCode(500, e.Message); 
            }
        }
    }
}