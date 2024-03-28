using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.DATA
{
    [Table("LoaiSP")]
    public class LoaiSP
    {
        [Key]
        public int MaLSP { get; set; }
        [Required]
        [MaxLength(100)]
        public string? TenLSP { get; set; }

        public int? MaCH { get; set; }

        public virtual ICollection<SanPham>? SanPhams { get; set; }
    }
}
