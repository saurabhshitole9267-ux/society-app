using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SocietyAPI.Data;
using SocietyAPI.Models;
using System.Linq;

namespace SocietyAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OwnersController : ControllerBase
    
    {
        using Microsoft.AspNetCore.Mvc;

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
        }

        [HttpPost]
[Consumes("application/json")]
public IActionResult AddOwner([FromBody] Owner owner)
{
    if (owner == null)
    {
        return BadRequest();
    }

    _context.Owners.Add(owner);
    _context.SaveChanges();

    return Ok(owner);
}
[HttpDelete("{id}")]
public IActionResult DeleteOwner(int id)
{
    var owner = _context.Owners.Find(id);

    if (owner == null)
        return NotFound();

    _context.Owners.Remove(owner);
    _context.SaveChanges();

    return Ok("Deleted");
}
[HttpPut("{id}")]
public IActionResult UpdateOwner(int id, Owner updatedOwner)
{
    var owner = _context.Owners.Find(id);

    if (owner == null)
        return NotFound();

    owner.Name = updatedOwner.Name;
    owner.FlatNumber = updatedOwner.FlatNumber;
    owner.Phone = updatedOwner.Phone;
    owner.Email = updatedOwner.Email;

    _context.SaveChanges();

    return Ok(owner);
}
        }
    

