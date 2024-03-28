using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class RegisterUserModel
    {
        [Required]
        public string FirstName { get; set; } = null!;
        [Required]
        public string LastName { get; set; } = null!;

        [Required(ErrorMessage = "User Name is required")]
        public string? UserName { get; set; }

        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string? Password { get; set; }

        public int? MaCH { get; set; }

        public int? MaCN { get; set; }

        public int? MaTCT { get; set; }
    }
}
