using BackEnd.Models;

namespace BackEnd.Repositorys
{   
    public interface ICuaHangRepository
    {
        public Task<List<CuaHangModel>> GetAllCHsAsync();
        public Task<CuaHangModel> GetCHAsync(int mach);
        public Task<int> AddCHAsync(CuaHangModel model);
        public Task UpdateCHAsync(int mach, CuaHangModel model);
        public Task DeleteCHAsync(int mach);
    }
}
