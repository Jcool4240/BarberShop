using BackEnd.DATA;
using BackEnd.Models;

namespace BackEnd.Repositorys
{
    public interface ICRUDRepository<T> where T : class
    {
        TDto GetById<TDto>(int id);
        public Task Add(T entity);
        public Task UpdateProperties(int id, T entity);
        public Task Delete(int id);
        IEnumerable<TDto> GetAll<TDto>();
    }
}
