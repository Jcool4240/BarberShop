using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class ChiNhanhModel
    {
        public int MaCN { get; set; }

        public string? TenCN { get; set; }

        public int? MaCH { get; set; }
    }
}
