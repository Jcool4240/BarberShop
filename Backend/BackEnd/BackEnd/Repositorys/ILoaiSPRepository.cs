using BackEnd.Models;

namespace BackEnd.Repositorys
{
    public interface ILoaiSPRepository
    {
        public Task<List<LoaiSPModel>> GetAllLoaiSPsAsync();
        public Task<List<LoaiSPModel>> GetAllLoaiSP1Async(int mach);
        public Task<LoaiSPModel> GetLoaiSPAsync(int malsp);
        public Task<int> AddLoaiSPAsync(LoaiSPModel model);
        public Task UpdateLoaiSPAsync(int malsp, LoaiSPModel model);
        public Task DeleteLoaiSPAsync(int malsp);
    }
}
