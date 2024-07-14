using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.DTOs.Auth
{
    public class LoginUserRequest
    {
        [Required]
        [EmailAddress]
        public string Email {get; set;} = string.Empty;
        [Required]
        public string Password {get; set;} = string.Empty;
    }
}