using AutoMapper;
using BackEnd.Models;
using BackEnd.DATA;
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repositorys
{
    public class ChiTietDonHangRepository: IChiTietDonHangRepository
    {
        private readonly BarberShopContext _context;
        private readonly IMapper _mapper;

        public ChiTietDonHangRepository(BarberShopContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> AddCTDHAsync(  ChiTietDonHangModel model)
        {
            var newctdh = _mapper.Map<ChiTietDonHang>(model);
            _context.ChiTietDonHangs!.Add(newctdh);
            await _context.SaveChangesAsync();
            return newctdh.MaDH;
        }

        public async Task DeleteCTDHAsync(int MaDH)
        {
            var deletech = _context.ChiTietDonHangs!.SingleOrDefault(a => a.MaDH == MaDH);
            if (deletech != null)
            {
                _context.ChiTietDonHangs!.Remove(deletech);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<ChiTietDonHangModel>> GetAllCTDHsAsync()
        {
            var chs = await _context.ChiTietDonHangs!.ToListAsync();
            return _mapper.Map<List<ChiTietDonHangModel>>(chs);
        }

        public async Task<ChiTietDonHangModel> GetCTDHAsync(int MaDH)
        {
            var ch = await _context.ChiTietDonHangs!.FindAsync(MaDH);
            return _mapper.Map<ChiTietDonHangModel>(ch);
        }

        public async Task UpdateCTDHAsync(int MaDH, ChiTietDonHangModel model)
        {
            if (MaDH == model.MaDH)
            {
                var updatech = _mapper.Map<ChiTietDonHang>(model);
                _context.ChiTietDonHangs!.Update(updatech);
                await _context.SaveChangesAsync();
            }
        }
    }
}
