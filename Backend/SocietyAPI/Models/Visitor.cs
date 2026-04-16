namespace SocietyAPI.Models
{
    public class Visitor
    {
        public int VisitorId { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string FlatNumber { get; set; }
        public string Purpose { get; set; }
        public DateTime EntryTime { get; set; }
        public DateTime? ExitTime { get; set; }
    }
}