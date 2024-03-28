using BackEnd.Repositorys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TCTCNController : ControllerBase
    {
        private readonly IThoCatTocRepository _thocattocrepo;

        public TCTCNController(IThoCatTocRepository repo)
        {
            _thocattocrepo = repo;
        }

        [HttpGet]
        [Route("{macn}")]
        public async Task<IActionResult> GetTCTCN(int macn)
        {
            var thocattoc = await _thocattocrepo.GetAllThoCatToc2Async(macn);
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
