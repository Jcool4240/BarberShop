using Microsoft.AspNetCore.Identity;

namespace BackEnd.DATA
{
    public class CustomUser : IdentityUser
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public int? MaCH { get; set; }
        public int? MaCN { get; set; }
        public int? MaTCT { get; set; }

        public ICollection<DonHang> DonHang { get; set;} = new HashSet<DonHang>();
    }
}
