using BackEnd.Models;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SanPhamsController : ControllerBase
    {
        private readonly ISanPhamRepository _sanphamrepo;

        public SanPhamsController(ISanPhamRepository repo)
        {
            _sanphamrepo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<List<SanPhamModel>>> GetSanPhams(
 [FromQuery] bool GiaGiamDan = true, [FromQuery] bool GiaTangDan = false,
 [FromQuery] bool TenAtoZ = false,
 [FromQuery] bool TenZtoA = true
 )
        {
            List<SanPhamModel> sanphams;

            if (GiaGiamDan)
            {
                sanphams = await _sanphamrepo.GetAllSanPhamsSortedByPriceAsync(GiaTangDan);
            }
            else if (TenZtoA)
            {
                sanphams = await _sanphamrepo.GetAllSanPhamsSortedByNameAsync(TenAtoZ);
            }
            else
            {
                sanphams = await _sanphamrepo.GetAllSanPhamsAsync();
            }

            return Ok(sanphams);
        }

        [HttpGet("{masp}")]
        public async Task<IActionResult> GetSanPham(int masp)
        {
            var sanpham = await _sanphamrepo.GetSanPhamAsync(masp);

            if (sanpham == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(sanpham);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddNewSanPham(SanPhamModel model)
        {
            try
            {
                var newsanpham = await _sanphamrepo.AddSanPhamAsync(model);
                var sanpham = await _sanphamrepo.GetSanPhamAsync(newsanpham);

                if (sanpham == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(sanpham);
                }
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{masp}")]
        public async Task<IActionResult> UpdateSanPham(int masp, SanPhamModel model)
        {
            if (masp != model.MaSP)
            {
                return NotFound();
            }
            else
            {
                await _sanphamrepo.UpdateSanPhamAsync(masp, model);
                return Ok();
            }
        }

        [HttpDelete("{masp}")]
        public async Task<ActionResult> DeleteSanPham(int masp)
        {
            await _sanphamrepo.DeleteSanPhamAsync(masp);
            return Ok();
        }

        [HttpGet("search")]
        public IActionResult SearchProducts([FromQuery] string productkey)
        {
            var productes = _sanphamrepo.Search<SanPhamModel>(product =>
            product.TenSP != null &&
            product.TenSP.Contains(productkey));
            return Ok(productes);
        }


    }
}
