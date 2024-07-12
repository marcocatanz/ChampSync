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
        public AuthController(UserManager<User> manager, IAuthService service)
        {
            _service = service;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserRequest req)
        {
            try
            {
                if(!ModelState.IsValid) return BadRequest(ModelState);
                IdentityResult createdUserResult = await _service.Register(req);
                if(!createdUserResult.Succeeded) return StatusCode(500, createdUserResult.Errors);
                else return Ok("User Registered");                
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);  
            }
        }
    }
}