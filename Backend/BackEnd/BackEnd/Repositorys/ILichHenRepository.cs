using BackEnd.Models;

namespace BackEnd.Repositorys
{
    public interface ILichHenRepository
    {
        public Task<List<LichHenModel>> GetAllLichHensAsync();
        public Task<List<LichHenModel>> GetAllLichHen1Async(int mach);
        public Task<List<LichHenModel>> GetAllLichHen2Async(int macn);
        public Task<List<LichHenModel>> GetAllLichHen3Async(int matct);
        public Task<List<LichHenModel>> GetAllLichHenUserAsync(string id);
        public Task<LichHenModel> GetLichHenAsync(int malh);
        public Task<int> AddLichHenAsync(LichHenModel model);
        public Task UpdateLichHenAsync(int malh, LichHenModel model);
        public Task DeleteLichHenAsync(int malh);
    }
}
