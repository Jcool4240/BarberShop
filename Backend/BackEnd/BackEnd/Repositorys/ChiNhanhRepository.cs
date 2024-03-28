using AutoMapper;
using BackEnd.Models;
using BackEnd.DATA;
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repositorys
{
    public class ChiNhanhRepository : IChiNhanhRepository
    {
        private readonly BarberShopContext _context;
        private readonly IMapper _mapper;

        public ChiNhanhRepository(BarberShopContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> AddChiNhanhAsync(ChiNhanhModel model)
        {
            var newchinhanh = _mapper.Map<ChiNhanh>(model);
            _context.ChiNhanhs!.Add(newchinhanh);
            await _context.SaveChangesAsync();
            return newchinhanh.MaCN;
        }

        public async Task DeleteChiNhanhAsync(int macn)
        {
            var deletechinhanh = _context.ChiNhanhs!.SingleOrDefault(a => a.MaCN == macn);
            if (deletechinhanh != null)
            {
                _context.ChiNhanhs!.Remove(deletechinhanh);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<ChiNhanhModel>> GetAllChiNhanhsAsync()
        {
            var chinhanhs = await _context.ChiNhanhs!.ToListAsync();
            return _mapper.Map<List<ChiNhanhModel>>(chinhanhs);
        }

        public async Task<List<ChiNhanhModel>> GetAllChiNhanh1Async(int maCH)
        {
            if (maCH == 0)
            {
                var chinhanhs = await _context.ChiNhanhs!.ToListAsync();
                return _mapper.Map<List<ChiNhanhModel>>(chinhanhs);
            }
            else
            {
                var chinhanhs = await _context.ChiNhanhs!.Where(a => a.MaCH == maCH).ToListAsync();
                return _mapper.Map<List<ChiNhanhModel>>(chinhanhs);
            }
        }

        public async Task<ChiNhanhModel> GetChiNhanhAsync(int macn)
        {
            var chinhanh = await _context.ChiNhanhs!.FindAsync(macn);
            return _mapper.Map<ChiNhanhModel>(chinhanh);
        }

        public async Task UpdateChiNhanhAsync(int macn, ChiNhanhModel model)
        {
            if (macn == model.MaCN)
            {
                var updatechinhanh = _mapper.Map<ChiNhanh>(model);
                _context.ChiNhanhs!.Update(updatechinhanh);
                await _context.SaveChangesAsync();
            }
        }
    }
}
