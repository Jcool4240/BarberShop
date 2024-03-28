using BackEnd.Models;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoaDonsController : ControllerBase
    {
        private readonly IHoaDonRepository _hoadonrepo;

        public HoaDonsController(IHoaDonRepository repo)
        {
            _hoadonrepo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllHoaDons()
        {
            try
            {
                return Ok(await _hoadonrepo.GetAllHoaDonsAsync());
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpGet("{mahd}")]
        public async Task<IActionResult> GetHoaDon(int mahd)
        {
            var hoadon = await _hoadonrepo.GetHoaDonAsync(mahd);

            if (hoadon == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(hoadon);
            }
        }
        [HttpPost]
        public async Task<IActionResult> AddNewHoaDon(HoaDonModel model)
        {
            try
            {
                var newhoadon = await _hoadonrepo.AddHoaDonAsync(model);
                var hoadon = await _hoadonrepo.GetHoaDonAsync(newhoadon);

                if (hoadon == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(hoadon);
                }
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpPut("{mahd}")]
        public async Task<IActionResult> UpdateHoaDon(int mahd, HoaDonModel model)
        {
            if (mahd != model.MAHD)
            {
                return NotFound();
            }
            else
            {
                await _hoadonrepo.UpdateHoaDonAsync(mahd, model);
                return Ok();
            }
        }

        [HttpDelete("{mahd}")]
        public async Task<ActionResult> DeleteHoaDon(int mahd)
        {
            await _hoadonrepo.DeleteHoaDonAsync(mahd);
            return Ok();
        }
    }
}
