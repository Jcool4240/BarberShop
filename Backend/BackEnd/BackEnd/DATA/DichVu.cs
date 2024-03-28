using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.DATA
{
    [Table("DichVu")]
    public class DichVu
    {
        [Key]
        public int MaDV { get; set; }
        [Required]
        [MaxLength(100)]
        public string? TenDV { get; set; }

        [Range(0, double.MaxValue)]
        public double GiaDV { get; set; }

        public string? Hinh { get;set; }

        public string? MoTa { get;set; }

        public int? MaCH { get; set; }

        public int? MaCN { get; set; }

        public int? MaLDV { get; set; }
        [ForeignKey("MaLDV")]
        public LoaiDV? LoaiDV { get; set; }

        public virtual ICollection<LichHen>? LichHens { get; set; }

        public ICollection<ChiTietHoaDon> ChiTietHoaDons { set; get; }
        public DichVu()
        {
            ChiTietHoaDons = new HashSet<ChiTietHoaDon>();
        }
    }
}
