using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.DATA
{
    [Table("LichHen")]
    public class LichHen
    {
        [Key]
        public int MaLH { get; set; }

        public string? Phone { get; set; }
        [Required]
        [MaxLength(100)]
        public string? Name { get; set; }

        public string? customer_number { get; set; } = string.Empty;

        public int? MaCN { get; set; }
        [ForeignKey("MaCN")]
        public ChiNhanh? ChiNhanh { get; set; }

        public string? Date { get; set; }

        public string? Time { get; set; }

        public string? GhiChu { get; set; }

        public int? MaCH { get; set; }

        public int? MaDV { get; set; }
        [ForeignKey("MaDV")]
        public DichVu? DichVu { get; set; }

        public int? MaTCT { get; set; }
        [ForeignKey("MaTCT")]
        public ThoCatToc? ThoCatToc { get; set; }

        public string? Iduser { get; set; }
    }
}
