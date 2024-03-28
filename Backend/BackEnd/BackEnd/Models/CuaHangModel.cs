using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class CuaHangModel
    {
        public int MaCH { get; set; }

        public string? TenCH { get; set; }

        public string? Email { get; set; }

        public string? SDT { get; set; }

        public string? DiaChi { get; set; }
    }
}
