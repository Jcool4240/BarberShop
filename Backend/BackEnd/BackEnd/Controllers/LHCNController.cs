using BackEnd.Repositorys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LHCNController : ControllerBase
    {
        private readonly ILichHenRepository _lichhenrepo;

        public LHCNController(ILichHenRepository repo)
        {
            _lichhenrepo = repo;
        }

        [HttpGet]
        [Route("{macn}")]
        public async Task<IActionResult> GetLHCN(int macn)
        {
            var lichhen = await _lichhenrepo.GetAllLichHen2Async(macn);
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
