using Microsoft.AspNetCore.Mvc;
using SocietyAPI.Data;
using SocietyAPI.Models;
using System;
using System.Linq;

namespace SocietyAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VisitorsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public VisitorsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // ENTRY
        [HttpPost("entry")]
        public IActionResult AddVisitor([FromBody] Visitor visitor)
        {
            visitor.EntryTime = DateTime.Now;
            _context.Visitors.Add(visitor);
            _context.SaveChanges();

            return Ok(visitor);
        }

        // EXIT
        [HttpPut("exit/{id}")]
        public IActionResult ExitVisitor(int id)
        {
            var visitor = _context.Visitors.FirstOrDefault(v => v.VisitorId == id);

            if (visitor == null)
                return NotFound();

            visitor.ExitTime = DateTime.Now;
            _context.SaveChanges();

            return Ok(visitor);
        }

        // GET ALL
        [HttpGet]
        public IActionResult GetVisitors()
        {
            var visitors = _context.Visitors.ToList();
            return Ok(visitors);
        }
    }
}