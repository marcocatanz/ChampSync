using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Interfaces;
using server.Models;

namespace server.Services
{
    public class UserService: IUserService
    {
        private readonly AppDbContext _context;
        public UserService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<List<User>> GetAll()
        {
            return await _context.Users.ToListAsync();
        }
        public async Task<User?> GetById(string id)
        {
            return await  _context.Users.FindAsync(id);
        }

    }
}