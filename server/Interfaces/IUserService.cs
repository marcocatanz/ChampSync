using server.Models;

namespace server.Interfaces
{
    public interface IUserService
    {
        Task<List<User>> GetAll();
        Task<User?> GetById(string id);
        
    }
}