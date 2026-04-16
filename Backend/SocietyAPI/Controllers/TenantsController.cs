using Microsoft.AspNetCore.Mvc;
using SocietyAPI.Data;
using SocietyAPI.Models;
using System;
using System.Linq;

namespace SocietyAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TenantsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TenantsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // ADD TENANT
        [HttpPost]
        public IActionResult AddTenant([FromBody] Tenant tenant)
        {
            tenant.StartDate = DateTime.Now;
            _context.Tenants.Add(tenant);
            _context.SaveChanges();

            return Ok(tenant);
        }

        // GET ALL TENANTS
        [HttpGet]
        public IActionResult GetTenants()
        {
            var tenants = _context.Tenants.ToList();
            return Ok(tenants);
        }

        // REMOVE TENANT (EXIT)
        [HttpPut("exit/{id}")]
        public IActionResult ExitTenant(int id)
        {
            var tenant = _context.Tenants.FirstOrDefault(t => t.TenantId == id);

            if (tenant == null)
                return NotFound();

            tenant.EndDate = DateTime.Now;
            _context.SaveChanges();

            return Ok(tenant);
        }
    }
}