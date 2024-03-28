using BackEnd.DATA;
using BackEnd.Models;

namespace BackEnd.Repositorys
{
    public interface IDonHangRepository
    {
        public Task<List<DonHangModel>> GetAllDonHangsAsync();
        public Task<DonHangModel> GetDonHangAsync(int madh);
        public Task<int> AddDonHangAsync(DonHang model);
        public Task UpdateDonHangAsync(int madh, DonHangModel model);
        public Task DeleteDonHangAsync(int madh);
    }
}
