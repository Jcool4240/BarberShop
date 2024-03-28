using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.DATA
{
    [Table("CuaHang")]
    public class CuaHang
    {
        [Key]
        public int MaCH { get; set; }
        [Required]
        [MaxLength(100)]
        public string? TenCH { get; set; }

        public string? Email { get; set; }

        public string? SDT { get; set; }

        public string? DiaChi { get; set; }

        public virtual ICollection<SanPham>? SanPhams { get; set; }
    }
}
