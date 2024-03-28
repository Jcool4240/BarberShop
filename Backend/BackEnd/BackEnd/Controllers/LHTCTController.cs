using BackEnd.Repositorys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LHTCTController : ControllerBase
    {
        private readonly ILichHenRepository _lichhenrepo;

        public LHTCTController(ILichHenRepository repo)
        {
            _lichhenrepo = repo;
        }

        [HttpGet]
        [Route("{matct}")]
        public async Task<IActionResult> GetLHTCT(int matct)
        {
            var lichhen = await _lichhenrepo.GetAllLichHen3Async(matct);
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
