namespace SocietyAPI.Models
{
    public class Tenant
    {
        public int TenantId { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string FlatNumber { get; set; }
        public string OwnerName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}