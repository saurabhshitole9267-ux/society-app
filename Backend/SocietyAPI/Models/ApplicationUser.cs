using Microsoft.AspNetCore.Identity;

namespace SocietyAPI.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? RoleName { get; set; }
    }
}