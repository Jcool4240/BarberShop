namespace BackEnd.DATA
{
    public class ChiTietHoaDon
    {
        public int MaHD { get; set; }

        public int MaDV { get; set; }

        public int SoLuong { get; set; }

        public double DonGia { get; set; }

        //.........
        public DichVu? DichVu { get; set; }

        public HoaDon? HoaDon { get; set; }
    }
}
