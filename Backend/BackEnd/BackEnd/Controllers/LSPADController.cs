using BackEnd.Repositorys;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LSPADController : ControllerBase
    {
        private readonly ILoaiSPRepository _loaisprepo;

        public LSPADController(ILoaiSPRepository repo)
        {
            _loaisprepo = repo;
        }

        [HttpGet]
        [Route("{mach}")]
        public async Task<IActionResult> GetLSPAD(int mach)
        {
            var loaisp = await _loaisprepo.GetAllLoaiSP1Async(mach);
            if (loaisp == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(loaisp);
            }
        }
    }
}