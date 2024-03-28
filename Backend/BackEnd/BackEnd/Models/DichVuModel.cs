using BackEnd.DATA;
using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class DichVuModel
    {
        public int MaDV { get; set; }
        [Required]
        [MaxLength(50)]
        public string? TenDV { get; set; }

        public double GiaDV { get; set; }

        public string? Hinh { get; set; }

        public string? MoTa { get; set; }

        public int? MaLDV { get; set; }

        public int? MaCH { get; set; }

        public int? MaCN { get; set; }
    }
}
