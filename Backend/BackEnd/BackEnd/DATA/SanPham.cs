using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.DATA
{
    [Table("SanPham")]
    public class SanPham
    {
        [Key]
        public int MaSP{ get; set; }
        [Required]
        [MaxLength(100)]
        public string? TenSP { get; set; }

        [Range(0, double.MaxValue)]
        public double GiaSP { get; set; }

        public string? Hinh { get; set; }

        public string? MoTa { get; set; }
        
        public int SoLuongTon { get; set; }

        public int? MaLSP { get; set; }
        [ForeignKey("MaLSP")]
        public LoaiSP? LoaiSP { get; set; }

        public int? MaCH { get; set; }
        [ForeignKey("MaCH")]
        public CuaHang? CuaHang { get; set; }
        
        public ICollection<ChiTietDonHang> ChiTietDonHangs { set; get; }
        public SanPham()
        {
            ChiTietDonHangs = new HashSet<ChiTietDonHang>();
        }
    }
}
