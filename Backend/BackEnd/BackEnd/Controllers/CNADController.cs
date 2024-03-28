using BackEnd.Repositorys;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CNADController : ControllerBase
    {
        private readonly IChiNhanhRepository _chinhanhrepo;

        public CNADController(IChiNhanhRepository repo)
        {
            _chinhanhrepo = repo;
        }

        [HttpGet]
        [Route("{mach}")]
        public async Task<IActionResult> GetCNAD(int mach)
        {
            var chinhanh = await _chinhanhrepo.GetAllChiNhanh1Async(mach);
            if (chinhanh == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(chinhanh);
            }
        }
    }
}