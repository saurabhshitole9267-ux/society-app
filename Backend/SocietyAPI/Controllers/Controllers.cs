using Microsoft.AspNetCore.Mvc;

namespace SocietyAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "API is working!";
        }
    }
}