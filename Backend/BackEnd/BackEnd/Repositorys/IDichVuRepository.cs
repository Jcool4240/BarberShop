using BackEnd.DATA;
using BackEnd.Models;

namespace BackEnd.Repositorys
{
    public interface IDichVuRepository
    {
        public Task<List<DichVuModel>> GetAllDichVusAsync();
        public Task<List<DichVuModel>> GetAllDichVu1Async(int mach);
        public Task<List<DichVuModel>> GetAllDichVu2Async(int macn);
        public Task<DichVuModel> GetDichVuAsync(int madv);
        public Task<int> AddDichVuAsync(DichVuModel model);
        public Task UpdateDichVuAsync(int madv, DichVuModel model);
        public Task DeleteDichVuAsync(int madv);
    }
}
