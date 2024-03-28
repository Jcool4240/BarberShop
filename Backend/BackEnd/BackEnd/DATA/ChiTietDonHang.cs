namespace BackEnd.DATA
{
    public class ChiTietDonHang
    {
        public int MaDH { get; set; }

        public int MaSP { get; set; }

        public int SoLuong { get; set; }
        //.........
        public SanPham? SanPham { get; set; }

        public DonHang? DonHang { get; set; }
    }
}
