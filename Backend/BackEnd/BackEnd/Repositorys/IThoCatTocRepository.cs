using BackEnd.Models;
using BackEnd.DATA;

namespace BackEnd.Repositorys
{
    public interface IThoCatTocRepository
    {
        public Task<List<ThoCatTocModel>> GetAllThoCatTocsAsync();
        public Task<List<ThoCatTocModel>> GetAllThoCatToc1Async(int mach);
        public Task<List<ThoCatTocModel>> GetAllThoCatToc2Async(int macn);
        public Task<ThoCatTocModel> GetThoCatTocAsync(int matct);
        public Task<int> AddThoCatTocAsync(ThoCatTocModel model);
        public Task UpdateThoCatTocAsync(int matct, ThoCatTocModel model);
        public Task DeleteThoCatTocAsync(int matct);
    }
}
