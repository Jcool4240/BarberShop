using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.DATA
{
    [Table("LoaiDV")]
    public class LoaiDV
    {
        [Key]
        public int MaLDV { get; set; }
        public int? MaCH { get; set; }
        public int? MaCN { get; set; }

        [Required]
        [MaxLength(100)]
        public string? TenLDV { get; set; }

        public virtual ICollection<DichVu>? DichVus { get; set; }
    }
}
