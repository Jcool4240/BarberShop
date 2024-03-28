using BackEnd.Models;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoaiSPsController : ControllerBase
    {
        private readonly ILoaiSPRepository _loaisprepo;

        public LoaiSPsController(ILoaiSPRepository repo)
        {
            _loaisprepo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllLoaiSPs()
        {
            try
            {
                return Ok(await _loaisprepo.GetAllLoaiSPsAsync());
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{malsp}")]
        public async Task<IActionResult> GetLoaiSP(int malsp)
        {
            var loaisp = await _loaisprepo.GetLoaiSPAsync(malsp);

            if (loaisp == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(loaisp);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddNewLoaiSP(LoaiSPModel model)
        {
            try
            {
                var newloaisp = await _loaisprepo.AddLoaiSPAsync(model);
                var loaisp = await _loaisprepo.GetLoaiSPAsync(newloaisp);

                if (loaisp == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(loaisp);
                }
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{malsp}")]
        public async Task<IActionResult> UpdateLoaiSP(int malsp, LoaiSPModel model)
        {
            if (malsp != model.MaLSP)
            {
                return NotFound();
            }
            else
            {
                await _loaisprepo.UpdateLoaiSPAsync(malsp, model);
                return Ok();
            }
        }

        [HttpDelete("{malsp}")]
        public async Task<ActionResult> DeleteLoaiDV(int malsp)
        {
            await _loaisprepo.DeleteLoaiSPAsync(malsp);
            return Ok();
        }
    }
}
