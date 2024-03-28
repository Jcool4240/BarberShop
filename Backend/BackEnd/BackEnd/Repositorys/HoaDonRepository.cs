using AutoMapper;
using BackEnd.Models;
using BackEnd.DATA;
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repositorys
{
    public class HoaDonRepository : IHoaDonRepository
    {
        private readonly BarberShopContext _context;
        private readonly IMapper _mapper;

        public HoaDonRepository(BarberShopContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> AddHoaDonAsync(HoaDonModel model)
        {
            var newhoadon = _mapper.Map<HoaDon>(model);
            _context.HoaDons!.Add(newhoadon);
            await _context.SaveChangesAsync();
            return newhoadon.MAHD;
        }

        public async Task DeleteHoaDonAsync(int mahd)
        {
            var deletehoadon = _context.HoaDons!.SingleOrDefault(a => a.MAHD == mahd);
            if (deletehoadon != null)
            {
                _context.HoaDons!.Remove(deletehoadon);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<HoaDonModel>> GetAllHoaDon1Async(int maCH)
        {
            if (maCH == 0)
            {
                var hoadons = await _context.HoaDons!.ToListAsync();
                return _mapper.Map<List<HoaDonModel>>(hoadons);
            }
            else
            {
                var hoadons = await _context.HoaDons!.Where(a => a.MaCH == maCH).ToListAsync();
                return _mapper.Map<List<HoaDonModel>>(hoadons);
            }
        }

        public async Task<List<HoaDonModel>> GetAllHoaDonsAsync()
        {
            var hoadons = await _context.HoaDons!.ToListAsync();
            return _mapper.Map<List<HoaDonModel>>(hoadons);
        }

        public async Task<HoaDonModel> GetHoaDonAsync(int mahd)
        {
            var hoadon = await _context.HoaDons!.FindAsync(mahd);
            return _mapper.Map<HoaDonModel>(hoadon);
        }

        public async Task UpdateHoaDonAsync(int mahd, HoaDonModel model)
        {
            if (mahd == model.MAHD)
            {
                var updatehoadon = _mapper.Map<HoaDon>(model);
                _context.HoaDons!.Update(updatehoadon);
                await _context.SaveChangesAsync();
            }
        }
    }
}
