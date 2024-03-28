using BackEnd.Repositorys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LDVCNController : ControllerBase
    {
        private readonly ILoaiDVRepository _loaidvrepo;

        public LDVCNController(ILoaiDVRepository repo)
        {
            _loaidvrepo = repo;
        }

        [HttpGet]
        [Route("{macn}")]
        public async Task<IActionResult> GetLDVCN(int macn)
        {
            var loaidv = await _loaidvrepo.GetLoaiDV2Async(macn);
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
