using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.DTOs.User;
using server.Interfaces;
using server.Mappers;

namespace server.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController: ControllerBase
    {
        private readonly IUserService _service;
        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(){
            var users = await _service.GetAll();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] string id){
            var user = await _service.GetById(id);
            if(user == null){
                return NotFound();
            }
            return Ok(user.ToUserResponse());
        }

    }
}