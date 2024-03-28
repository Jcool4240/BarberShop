using BackEnd.Models;
using BackEnd.DATA;
using BackEnd.Models;

namespace BackEnd.Repositorys
{
    public interface IChiTietDonHangRepository
    {
        public Task<List<ChiTietDonHangModel>> GetAllCTDHsAsync();
        public Task<ChiTietDonHangModel> GetCTDHAsync(int mach);
        public Task<int> AddCTDHAsync(ChiTietDonHangModel model);
        public Task UpdateCTDHAsync(int mactdh, ChiTietDonHangModel model);
        public Task DeleteCTDHAsync(int mactdh);
    }
}
