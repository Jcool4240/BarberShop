using BackEnd.Repositorys;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HDADController : ControllerBase
    {
        private readonly IHoaDonRepository _hoadonrepo;

        public HDADController(IHoaDonRepository repo)
        {
            _hoadonrepo = repo;
        }

        [HttpGet]
        [Route("{mach}")]
        public async Task<IActionResult> GetHDAD(int mach)
        {
            var hoadon = await _hoadonrepo.GetAllHoaDon1Async(mach);
            if (hoadon == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(hoadon);
            }
        }
    }
}