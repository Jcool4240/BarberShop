using AutoMapper;
using BackEnd.Models;
using BackEnd.DATA;
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repositorys
{
    public class DonHangRepository : IDonHangRepository
    {
        private readonly BarberShopContext _context;
        private readonly IMapper _mapper;

        public DonHangRepository(BarberShopContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> AddDonHangAsync(DonHang model)
        {
            //var newdonhang = _mapper.Map<DonHang>(model);
            //_context.DonHangs!.Add(newdonhang);
            //await _context.SaveChangesAsync();
            //return newdonhang.MaDH;

            await _context.Set<DonHang>().AddAsync(model);
            _context.SaveChanges();
            return model.MaDH;
        }

        public async Task DeleteDonHangAsync(int madh)
        {
            var deletedonhang = _context.DonHangs!.SingleOrDefault(a => a.MaDH == madh);
            if (deletedonhang != null)
            {
                _context.DonHangs!.Remove(deletedonhang);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<DonHangModel>> GetAllDonHangsAsync()
        {
            var donhangs = await _context.DonHangs!.ToListAsync();
            return _mapper.Map<List<DonHangModel>>(donhangs);
        }

        public async Task<DonHangModel> GetDonHangAsync(int madh)
        {
            var donhang = await _context.DonHangs!.FindAsync(madh);
            return _mapper.Map<DonHangModel>(donhang);
        }

        public async Task UpdateDonHangAsync(int madh, DonHangModel model)
        {
            if (madh == model.MaDH)
            {
                var updatedonhang = _mapper.Map<DonHang>(model);
                _context.DonHangs!.Update(updatedonhang);
                await _context.SaveChangesAsync();
            }
        }
    }
}
