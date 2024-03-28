using BackEnd.Models;

namespace BackEnd.Repositorys
{
    public interface IHoaDonRepository
    {
        public Task<List<HoaDonModel>> GetAllHoaDonsAsync();
        public Task<List<HoaDonModel>> GetAllHoaDon1Async(int mach);
        public Task<HoaDonModel> GetHoaDonAsync(int mahd);
        public Task<int> AddHoaDonAsync(HoaDonModel model);
        public Task UpdateHoaDonAsync(int mahd, HoaDonModel model);
        public Task DeleteHoaDonAsync(int mahd);
    }
}
