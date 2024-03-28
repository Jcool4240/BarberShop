using BackEnd.DATA;
using BackEnd.Models;
using System.Linq.Expressions;

namespace BackEnd.Repositorys
{
    public interface ISanPhamRepository
    {
        public Task<List<SanPhamModel>> GetAllSanPhamsAsync();
        public Task<List<SanPhamModel>> GetAllSanPham1Async(int mach);
        public Task<SanPhamModel> GetSanPhamAsync(int masp);
        public Task<int> AddSanPhamAsync(SanPhamModel model);
        public Task UpdateSanPhamAsync(int masp, SanPhamModel model);
        public Task DeleteSanPhamAsync(int masp);
        IEnumerable<SanPhamModel> Search<SanPhamModel>(Expression<Func<SanPham, bool>> predicate);
        Task<List<SanPhamModel>> GetAllSanPhamsSortedByPriceAsync(bool ascending);
        Task<List<SanPhamModel>> GetAllSanPhamsSortedByNameAsync(bool ascending);
    }
}
