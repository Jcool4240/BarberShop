using BackEnd.Repositorys;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DVADController : ControllerBase
    {
        private readonly IDichVuRepository _dichvurepo;

        public DVADController(IDichVuRepository repo)
        {
            _dichvurepo = repo;
        }

        [HttpGet]
        [Route("{mach}")]
        public async Task<IActionResult> GetDVAD(int mach)
        {
            var dichvu = await _dichvurepo.GetAllDichVu1Async(mach);
            if (dichvu == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(dichvu);
            }
        }
    }
}