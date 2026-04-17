using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace SocietyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnersController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetOwners()
        {
            var owners = new List<object>
            {
                new { ownerId = 1, name = "Demo User", flatNumber = "101", phone = "1234567890", email = "demo@gmail.com" }
            };

            return Ok(owners);
        }
    }
}