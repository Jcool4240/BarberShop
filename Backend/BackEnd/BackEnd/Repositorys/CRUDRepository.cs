using AutoMapper;
using BackEnd.Models;
using BackEnd.DATA;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repositorys
{
    public class CRUDRepository<T> : ICRUDRepository<T> where T : class
    {
        private readonly BarberShopContext _context;
        private readonly IMapper _mapper;

        public CRUDRepository(BarberShopContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task Add(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
        }

        public async Task Delete(int id)
        {
            var entity = await _context.Set<T>().FindAsync(id);
            if (entity != null)
                _context.Set<T>().Remove(entity);
            _context.SaveChanges();
        }

        public IEnumerable<TDto> GetAll<TDto>()
        {
            var entities = _context.Set<T>().ToList();
            return entities.Select(entity => MapToDto<TDto>(entity));
        }

        public TDto GetById<TDto>(int id)
        {
            var entity = _context.Set<T>().Find(id);
            if (entity == null)
            {
                throw new ArgumentException($"Không tìm thấy đối tượng với ID {id}.");
            }
            return MapToDto<TDto>(entity);
        }

        public async Task UpdateProperties(int id, T model)
        {
            var entity = await _context.Set<T>().FindAsync(id);
            if (entity != null)
            {
                _context.Entry(entity).CurrentValues.SetValues(model);
                await _context.SaveChangesAsync();
            }
        }


        private TDto MapToDto<TDto>(T entity)
        {
            return _mapper.Map<TDto>(entity);
        }
    }
}
