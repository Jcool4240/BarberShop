using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class SanPhamModel
    {
        public int MaSP { get; set; }

        public string? TenSP { get; set; }

        public double GiaSP { get; set; }

        public string? Hinh { get; set; }

        public string? MoTa { get; set; }

        public int SoLuongTon { get; set; }

        public int? MaLSP { get; set; }

        public int? MaCH { get; set; }
    }
}
