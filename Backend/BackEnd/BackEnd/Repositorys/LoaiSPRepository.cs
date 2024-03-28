using AutoMapper;
using BackEnd.Models;
using BackEnd.DATA;
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repositorys
{
    public class LoaiSPRepository : ILoaiSPRepository
    {
        private readonly BarberShopContext _context;
        private readonly IMapper _mapper;

        public LoaiSPRepository(BarberShopContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> AddLoaiSPAsync(LoaiSPModel model)
        {
            var newloaisp = _mapper.Map<LoaiSP>(model);
            _context.LoaiSPs!.Add(newloaisp);
            await _context.SaveChangesAsync();
            return newloaisp.MaLSP;
        }

        public async Task DeleteLoaiSPAsync(int malsp)
        {
            var deleteloaisp = _context.LoaiSPs!.SingleOrDefault(a => a.MaLSP == malsp);
            if (deleteloaisp != null)
            {
                _context.LoaiSPs!.Remove(deleteloaisp);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<LoaiSPModel>> GetAllLoaiSP1Async(int maCH)
        {
            if (maCH == 0)
            {
                var loaisps = await _context.LoaiSPs!.ToListAsync();
                return _mapper.Map<List<LoaiSPModel>>(loaisps);
            }
            else
            {
                var loaisps = await _context.LoaiSPs!.Where(a => a.MaCH == maCH).ToListAsync();
                return _mapper.Map<List<LoaiSPModel>>(loaisps);
            }
        }

        public async Task<List<LoaiSPModel>> GetAllLoaiSPsAsync()
        {
            var loaisps = await _context.LoaiSPs!.ToListAsync();
            return _mapper.Map<List<LoaiSPModel>>(loaisps);
        }

        public async Task<LoaiSPModel> GetLoaiSPAsync(int malsp)
        {
            var loaisp = await _context.LoaiSPs!.FindAsync(malsp);
            return _mapper.Map<LoaiSPModel>(loaisp);
        }

        public async Task UpdateLoaiSPAsync(int malsp, LoaiSPModel model)
        {
            if (malsp == model.MaLSP)
            {
                var updateloaisp = _mapper.Map<LoaiSP>(model);
                _context.LoaiSPs!.Update(updateloaisp);
                await _context.SaveChangesAsync();
            }
        }
    }
}
