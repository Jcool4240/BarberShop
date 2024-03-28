using Microsoft.AspNetCore.Http;
using BackEnd.Models;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DichVusController : ControllerBase
    {
        private readonly IDichVuRepository _dichvurepo;

        public DichVusController(IDichVuRepository repo)
        {
            _dichvurepo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDichVus()
        {
            try
            {
                return Ok( await _dichvurepo.GetAllDichVusAsync());
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{madv}")]
        public async Task<IActionResult> GetDichVu(int madv)
        {
            var dichvu = await _dichvurepo.GetDichVuAsync(madv);

            if (dichvu == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(dichvu);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddNewDichVu(DichVuModel model)
        {
            try
            {
                var newdichvu = await _dichvurepo.AddDichVuAsync(model);
                var dichvu = await _dichvurepo.GetDichVuAsync(newdichvu);

                if (dichvu == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(dichvu);
                }
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{madv}")]
        public async Task<IActionResult> UpdateDichVu(int madv, DichVuModel model)
        {
            if (madv != model.MaDV)
            {
                return NotFound();
            }
            else
            {
                await _dichvurepo.UpdateDichVuAsync(madv, model);
                return Ok();
            }
        }

        [HttpDelete("{madv}")]
        public async Task<ActionResult> DeleteDichVu(int madv)
        {
            await _dichvurepo.DeleteDichVuAsync(madv);
            return Ok();
        }
    }
}
