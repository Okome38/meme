namespace seibuDatabase.Models
{
    public class DemoGomenCounter
    {
        public int demoGomenCount { get; set; }
        public int nonDemoGomenCount { get; set; }
        public DateTime lastUpdated { get; set; }
        public string lastUpdatedBy { get; set; }
    }
}
