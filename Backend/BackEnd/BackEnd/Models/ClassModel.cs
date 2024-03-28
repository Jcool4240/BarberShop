using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class ClassModel
    {
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Name { get; set; }

    }
}
