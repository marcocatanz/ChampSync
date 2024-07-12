using System.ComponentModel.DataAnnotations;


namespace server.DTOs.Auth
{
    public class RegisterUserRequest
    {
        [Required]
        [EmailAddress]
        public string Email {get; set;} = string.Empty;
        [Required]
        public string FirstName {get; set;} = string.Empty;
        [Required]
        public string LastName {get; set;} = string.Empty;
        [Required]
        public string Password {get; set;} = string.Empty;
    }
}