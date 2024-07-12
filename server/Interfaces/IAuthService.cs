using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using server.DTOs.Auth;
using server.Models;

namespace server.Interfaces
{
    public interface IAuthService
    {
        Task<IdentityResult> Register(RegisterUserRequest req); 
    }
}