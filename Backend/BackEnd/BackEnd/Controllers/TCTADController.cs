using BackEnd.Repositorys;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Mvc;
    
namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TCTADController : ControllerBase
    {
        private readonly IThoCatTocRepository _thocattocrepo;

        public TCTADController(IThoCatTocRepository repo)
        {
            _thocattocrepo = repo;
        }

        [HttpGet]
        [Route("{mach}")]
        public async Task<IActionResult> GetTCTAD(int mach)
        {
            var thocattoc = await _thocattocrepo.GetAllThoCatToc1Async(mach);
            if (thocattoc == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(thocattoc);
            }
        }
    }
}