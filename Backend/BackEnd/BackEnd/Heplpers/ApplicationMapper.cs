using AutoMapper;
using BackEnd.Models;
using BackEnd.DATA;
using BackEnd.Models;

namespace BackEnd.Heplpers
{
    public class ApplicationMapper : Profile
    {
        public ApplicationMapper()
        {
            CreateMap<DichVu, DichVuModel>().ReverseMap();

            CreateMap<LoaiDV, LoaiDVModel>().ReverseMap();

            CreateMap<SanPham, SanPhamModel>().ReverseMap();

            CreateMap<LoaiSP, LoaiSPModel>().ReverseMap();

            CreateMap<CuaHang,  CuaHangModel>().ReverseMap();

            CreateMap<DonHang, DonHangModel>().ReverseMap();

            CreateMap<ChiTietDonHang, ChiTietDonHangModel>().ReverseMap();

            CreateMap<HoaDon, HoaDonModel>().ReverseMap();

            CreateMap<LichHen, LichHenModel>().ReverseMap();

            CreateMap<ThoCatToc, ThoCatTocModel>().ReverseMap();

            CreateMap<ChiNhanh, ChiNhanhModel>().ReverseMap();
        }
    }
}
