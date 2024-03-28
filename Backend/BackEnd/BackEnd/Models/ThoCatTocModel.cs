using BackEnd.DATA;
using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class ThoCatTocModel
    {
        [Key]
        public int MaTCT { get; set; }
        [Required]
        [MaxLength(100)]
        public string? TenTCT { get; set; }
        public int? MaCN { get; set; }
        public int? MaCH { get; set; }
    }
}

