using BackEnd.Repositorys;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SPADController : ControllerBase
    {
        private readonly ISanPhamRepository _sanphamrepo;

        public SPADController(ISanPhamRepository repo)
        {
            _sanphamrepo = repo;
        }

        [HttpGet]
        [Route("{mach}")]
        public async Task<IActionResult> GetSPAD(int mach)
        {
            var sanpham = await _sanphamrepo.GetAllSanPham1Async(mach);
            if (sanpham == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(sanpham);
            }
        }
    }
}