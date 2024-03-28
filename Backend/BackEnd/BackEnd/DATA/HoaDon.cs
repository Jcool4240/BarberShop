using System.ComponentModel.DataAnnotations;

namespace BackEnd.DATA
{
    public class HoaDon
    {
        public int MAHD { get; set; }

        public DateTime ThoiGianHD { get; set; }

        public double TongTien { get; set; }

        public int? MaCH { get; set; }

        public int? MaCN { get; set; }

        public ICollection<ChiTietHoaDon> ChiTietHoaDons { set; get; }
        public HoaDon()
        {
            ChiTietHoaDons = new List<ChiTietHoaDon>();
        }
    }
}
