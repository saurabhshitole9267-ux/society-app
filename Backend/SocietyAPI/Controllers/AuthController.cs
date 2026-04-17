using Microsoft.AspNetCore.Mvc;

namespace SocietyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginModel model)
        {
            // TEMP LOGIN (NO DATABASE)
            if (model.Username == "admin" && model.Password == "123")
            {
                return Ok(new
                {
                    token = "dummy-token",
                    role = "admin"
                });
            }

            return Unauthorized("Invalid credentials");
        }
    }

    public class LoginModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}