using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.DTOs.User
{
    public class LoggedInUserDto
    {
        public string? FirstName {get; set;}
        public string? LastName {get; set;}
        public string? Email {get; set;}
        public string? Token {get; set;}
    }
}