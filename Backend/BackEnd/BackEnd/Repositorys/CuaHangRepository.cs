using AutoMapper;
using BackEnd.DATA;
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repositorys
{
    public class CuaHangRepository : ICuaHangRepository
    {
        private readonly BarberShopContext _context;
        private readonly IMapper _mapper;

        public CuaHangRepository(BarberShopContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> AddCHAsync(CuaHangModel model)
        {
            var newch = _mapper.Map<CuaHang>(model);
            _context.CuaHangs!.Add(newch);
            await _context.SaveChangesAsync();
            return newch.MaCH;
        }

        public async Task DeleteCHAsync(int mach)
        {
            var deletech = _context.CuaHangs!.SingleOrDefault(a => a.MaCH == mach);
            if (deletech != null)
            {
                _context.CuaHangs!.Remove(deletech);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<CuaHangModel>> GetAllCHsAsync()
        {
            var chs = await _context.CuaHangs!.ToListAsync();
            return _mapper.Map<List<CuaHangModel>>(chs);
        }

        public async Task<CuaHangModel> GetCHAsync(int mach)
        {
            var ch = await _context.CuaHangs!.FindAsync(mach);
            return _mapper.Map<CuaHangModel>(ch);
        }

        public async Task UpdateCHAsync(int mach, CuaHangModel model)
        {
            if (mach == model.MaCH)
            {
                var updatech = _mapper.Map<CuaHang>(model);
                _context.CuaHangs!.Update(updatech);
                await _context.SaveChangesAsync();
            }
        }
    }
}
