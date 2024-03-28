using BackEnd.Repositorys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DVCNController : ControllerBase
    {
        private readonly IDichVuRepository _dichvurepo;

        public DVCNController(IDichVuRepository repo)
        {
            _dichvurepo = repo;
        }

        [HttpGet]
        [Route("{macn}")]
        public async Task<IActionResult> GetDVCN(int macn)
        {
            var dichvu = await _dichvurepo.GetAllDichVu2Async(macn);
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
