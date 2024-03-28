using AutoMapper;
using BackEnd.DATA;
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repositorys
{
    public class LoaiDVRepository : ILoaiDVRepository
    {
        private readonly BarberShopContext _context;
        private readonly IMapper _mapper;

        public LoaiDVRepository(BarberShopContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> AddLoaiDVAsync(LoaiDVModel model)
        {
            var newloaidv = _mapper.Map<LoaiDV>(model);
            _context.LoaiDVs!.Add(newloaidv);
            await _context.SaveChangesAsync();
            return newloaidv.MaLDV;
        }

        public async Task DeleteLoaiDVAsync(int maldv)
        {
            var deleteloaidv = _context.LoaiDVs!.SingleOrDefault(a => a.MaLDV == maldv);
            if (deleteloaidv != null)
            {
                _context.LoaiDVs!.Remove(deleteloaidv);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<LoaiDVModel>> GetAllLoaiDVsAsync()
        {
            var loaidvs = await _context.LoaiDVs!.ToListAsync();
            return _mapper.Map<List<LoaiDVModel>>(loaidvs);
        }

        public async Task<List<LoaiDVModel>> GetLoaiDV1Async(int maCH)
        {
            if (maCH == 0)
            {
                var loaidvs = await _context.LoaiDVs!.ToListAsync();
                return _mapper.Map<List<LoaiDVModel>>(loaidvs);
            }
            else
            {
                var loaidv = await _context.LoaiDVs!.Where(a => a.MaCH == maCH).ToListAsync();
                return _mapper.Map<List<LoaiDVModel>>(loaidv);
            }
        }

        public async Task<List<LoaiDVModel>> GetLoaiDV2Async(int maCN)
        {
            if (maCN == 0)
            {
                var loaidvs = await _context.LoaiDVs!.ToListAsync();
                return _mapper.Map<List<LoaiDVModel>>(loaidvs);
            }
            else
            {
                var loaidv = await _context.LoaiDVs!.Where(a => a.MaCN == maCN).ToListAsync();
                return _mapper.Map<List<LoaiDVModel>>(loaidv);
            }
        }

        public async Task<LoaiDVModel> GetLoaiDVAsync(int maldv)
        {
            var loaidv = await _context.LoaiDVs!.FindAsync(maldv);
            return _mapper.Map<LoaiDVModel>(loaidv);
        }

        public async Task UpdateLoaiDVAsync(int maldv, LoaiDVModel model)
        {
            if (maldv == model.MaLDV)
            {
                var updateloaidv = _mapper.Map<LoaiDV>(model);
                _context.LoaiDVs!.Update(updateloaidv);
                await _context.SaveChangesAsync();
            }
        }
    }
}
