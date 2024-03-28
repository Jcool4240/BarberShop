using AutoMapper;
using BackEnd.Repositorys;
using BackEnd.DATA;
using System.Net;

namespace BackEnd
{
    public class UnitOfWork : IDisposable
    {
        private readonly BarberShopContext _context;
        public IMapper Mapper { get; }

        public ICRUDRepository<CuaHang> CuaHangRepository { get; set; } = null!;
        public ICRUDRepository<ChiNhanh> ChiNhanhRepository { get; set; } = null!;
        public ICRUDRepository<ChiTietDonHang> CTDHRepository { get; set; } = null!;
        public ICRUDRepository<ChiTietHoaDon> CTHDRepository { get; set; } = null!;
        public ICRUDRepository<DichVu> DichVuRepository { get; set; } = null!;
        public ICRUDRepository<DonHang> DonHangRepository { get; set; } = null!;
        public ICRUDRepository<HoaDon> HoaDonRepository { get; set; } = null!;
        public ICRUDRepository<LichHen> LichHenRepository { get; set; } = null!;
        public ICRUDRepository<LoaiDV> LoaiDVRepository { get; set; } = null!;
        public ICRUDRepository<LoaiSP> LoaiSPRepository { get; set; } = null!;
        public ICRUDRepository<SanPham> SanPhamRepository { get; set; } = null!;
        public ICRUDRepository<ThoCatToc> ThoCatTocRepository { get; set; } = null!;

        public UnitOfWork(BarberShopContext context, IMapper mapper)
        {
            _context = context;
            Mapper = mapper;
            InitializeRepositories(mapper);
        }

        private void InitializeRepositories(IMapper mapper)
        {
            CuaHangRepository = new CRUDRepository<CuaHang>(_context, mapper);
            ChiNhanhRepository = new CRUDRepository<ChiNhanh>(_context, mapper);
            CTDHRepository = new CRUDRepository<ChiTietDonHang>(_context, mapper);
            CTHDRepository = new CRUDRepository<ChiTietHoaDon>(_context, mapper);
            DichVuRepository = new CRUDRepository<DichVu>(_context, mapper);
            DonHangRepository = new CRUDRepository<DonHang>(_context, mapper);
            HoaDonRepository = new CRUDRepository<HoaDon>(_context, mapper);
            LichHenRepository = new CRUDRepository<LichHen>(_context, mapper);
            LoaiDVRepository = new CRUDRepository<LoaiDV>(_context, mapper);
            LoaiSPRepository = new CRUDRepository<LoaiSP>(_context, mapper);
            SanPhamRepository = new CRUDRepository<SanPham>(_context, mapper);
            ThoCatTocRepository = new CRUDRepository<ThoCatToc>(_context, mapper);
        }

        public void Commit()
        {
            _context.SaveChanges();
        }

        public async Task CommitAsync()
        {
            await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
