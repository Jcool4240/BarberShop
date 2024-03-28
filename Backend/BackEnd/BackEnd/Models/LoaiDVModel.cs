using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class LoaiDVModel
    {
        public int MaLDV { get; set; }
        public int? MaCH { get; set; }
        public int? MaCN { get; set; }
        [Required]
        [MaxLength(50)]
        public string? TenLDV { get; set; }
    }
}
