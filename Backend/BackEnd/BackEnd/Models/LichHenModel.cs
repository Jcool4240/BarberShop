using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class LichHenModel
    {
        public int MaLH { get; set; }

        public string? Phone { get; set; }
        [Required]
        [MaxLength(100)]
        public string? Name { get; set; }

        public string? customer_number { get; set; } = string.Empty;

        public int? MaCN { get; set; }

        public string? GhiChu { get; set; }

        public string? Date { get; set; }

        public string? Time { get; set; }

        public int MaDV { get; set; }

        public int MaTCT { get; set; }

        public int? MaCH { get; set; }

        public string? Iduser { get; set; }
    }
}
