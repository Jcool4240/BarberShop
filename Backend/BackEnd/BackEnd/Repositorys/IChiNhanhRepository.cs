using BackEnd.Models;

namespace BackEnd.Repositorys
{
    public interface IChiNhanhRepository
    {
        public Task<List<ChiNhanhModel>> GetAllChiNhanhsAsync();
        public Task<List<ChiNhanhModel>> GetAllChiNhanh1Async(int mach);
        public Task<ChiNhanhModel> GetChiNhanhAsync(int macn);
        public Task<int> AddChiNhanhAsync(ChiNhanhModel model);
        public Task UpdateChiNhanhAsync(int macn, ChiNhanhModel model);
        public Task DeleteChiNhanhAsync(int macn);
    }
}
