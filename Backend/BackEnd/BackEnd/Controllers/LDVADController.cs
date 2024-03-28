using BackEnd.Repositorys;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LDVADController : ControllerBase
    {
        private readonly ILoaiDVRepository _loaidvrepo;

        public LDVADController(ILoaiDVRepository repo)
        {
            _loaidvrepo = repo;
        }

        [HttpGet]
        [Route("{mach}")]
        public async Task<IActionResult> GetLDVAD(int mach)
        {
            var loaidv = await _loaidvrepo.GetLoaiDV1Async(mach);
            if (loaidv == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(loaidv);
            }
        }
    }
}