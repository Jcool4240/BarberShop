using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class LoaiSPModel
    {
        public int MaLSP { get; set; }
        public string? TenLSP { get; set; }
        public int? MaCH { get; set; }
    }
}
