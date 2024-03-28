using BackEnd.Models;

namespace BackEnd.Repositorys
{
    public interface ILoaiDVRepository
    {
        public Task<List<LoaiDVModel>> GetAllLoaiDVsAsync();
        public Task<List<LoaiDVModel>> GetLoaiDV1Async(int mach);
        public Task<List<LoaiDVModel>> GetLoaiDV2Async(int macn);
        public Task<LoaiDVModel> GetLoaiDVAsync(int maldv);
        public Task<int> AddLoaiDVAsync(LoaiDVModel model);
        public Task UpdateLoaiDVAsync(int maldv, LoaiDVModel model);
        public Task DeleteLoaiDVAsync(int maldv);
    }
}
