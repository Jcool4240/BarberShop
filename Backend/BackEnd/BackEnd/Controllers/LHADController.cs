using BackEnd.Repositorys;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LHADController : ControllerBase
    {
        private readonly ILichHenRepository _lichhenrepo;

        public LHADController(ILichHenRepository repo)
        {
            _lichhenrepo = repo;
        }

        [HttpGet]
        [Route("{mach}")]
        public async Task<IActionResult> GetLHAD(int mach)
        {
            var lichhen = await _lichhenrepo.GetAllLichHen1Async(mach);
            if (lichhen == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(lichhen);
            }
        }
    }
}