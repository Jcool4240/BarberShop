using BackEnd.Repositorys;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LHUSController : ControllerBase
    {
        private readonly ILichHenRepository _lichhenrepo;

        public LHUSController(ILichHenRepository repo)
        {
            _lichhenrepo = repo;
        }

        [HttpGet]
        [Route("{iduser}")]
        public async Task<IActionResult> GetLHUS(string iduser)
        {
            var lichhen = await _lichhenrepo.GetAllLichHenUserAsync(iduser);
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