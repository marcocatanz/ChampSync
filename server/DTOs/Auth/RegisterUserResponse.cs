using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.DTOs.User;

namespace server.DTOs.Auth
{
    public class RegisterUserResponse
    {
        public bool Succeeded {get; set;}
        public LoggedInUserDto? user {get; set;} 
    }
}