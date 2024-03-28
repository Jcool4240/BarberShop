using AutoMapper;
using BackEnd.Models;
using BackEnd.DATA;
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace BackEnd.Repositorys
{
    public class SanPhamRepository : ISanPhamRepository
    {
        private readonly BarberShopContext _context;
        private readonly IMapper _mapper;

        public SanPhamRepository(BarberShopContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> AddSanPhamAsync(SanPhamModel model)
        {
            var newsanpham = _mapper.Map<SanPham>(model);
            _context.SanPhams!.Add(newsanpham);
            await _context.SaveChangesAsync();
            return newsanpham.MaSP;
        }

        public async Task DeleteSanPhamAsync(int masp)
        {
            var deletesanpham = _context.SanPhams!.SingleOrDefault(a => a.MaSP == masp);
            if (deletesanpham != null)
            {
                _context.SanPhams!.Remove(deletesanpham);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<SanPhamModel>> GetAllSanPham1Async(int maCH)
        {
            if (maCH == 0)
            {
                var sanphams = await _context.SanPhams!.ToListAsync();
                return _mapper.Map<List<SanPhamModel>>(sanphams);
            }
            else
            {
                var sanphams = await _context.SanPhams!.Where(a => a.MaCH == maCH).ToListAsync();
                return _mapper.Map<List<SanPhamModel>>(sanphams);
            }
        }

        public async Task<List<SanPhamModel>> GetAllSanPhamsAsync()
        {
            var sanphams = await _context.SanPhams!.ToListAsync();
            return _mapper.Map<List<SanPhamModel>>(sanphams);
        }

        public async Task<SanPhamModel> GetSanPhamAsync(int masp)
        {
            var sanpham = await _context.SanPhams!.FindAsync(masp);
            return _mapper.Map<SanPhamModel>(sanpham);
        }

        public async Task UpdateSanPhamAsync(int masp, SanPhamModel model)
        {
            if (masp == model.MaSP)
            {
                var updatesanpham = _mapper.Map<SanPham>(model);
                _context.SanPhams!.Update(updatesanpham);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<SanPhamModel> Search<SanPhamModel>(Expression<Func<SanPham, bool>> predicate)
        {
            var entities = _context.Set<SanPham>().Where(predicate).ToList();
            return entities.Select(entity => MapToDto<SanPhamModel>(entity));
        }

        private SanPhamModel MapToDto<SanPhamModel>(SanPham entity)
        {
            return _mapper.Map<SanPhamModel>(entity);
        }

        public async Task<List<SanPhamModel>> GetAllSanPhamsSortedByPriceAsync(bool ascending)
        {
            var sanphams = await _context.SanPhams!
            .OrderBy(s => ascending ? s.GiaSP : -s.GiaSP)
            .ToListAsync();

            return _mapper.Map<List<SanPhamModel>>(sanphams);
        }

        public async Task<List<SanPhamModel>> GetAllSanPhamsSortedByNameAsync(bool ascending)
        {
            var sanphams = await _context.SanPhams
            .Where(s => s.TenSP != null && s.TenSP.Length > 0)
            .ToListAsync();

            sanphams = ascending
            ? sanphams.OrderBy(s => s.TenSP.FirstOrDefault()).ToList()
            : sanphams.OrderByDescending(s => s.TenSP.FirstOrDefault()).ToList();

            return _mapper.Map<List<SanPhamModel>>(sanphams);
        }
    }
}
