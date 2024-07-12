using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using server.DTOs.Auth;
using server.DTOs.User;
using server.Models;

namespace server.Mappers
{
    public static class UserMappers
    {
        public static UserResponse ToUserResponse(this User model)
        {
            return new UserResponse
            {
                Id = model.Id,
                FirstName = model.FirstName,
                LastName = model.LastName
            };
        }

        public static User ToUserModel(this RegisterUserRequest req)
        {
            return new User
            {
                Email = req.Email,
                FirstName = req.FirstName,
                LastName = req.LastName
            };
        }
    }
}