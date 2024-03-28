using BackEnd.Models;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LichHensController : ControllerBase
    {
        private readonly ILichHenRepository _lichhenrepo;

        public LichHensController(ILichHenRepository repo)
        {
            _lichhenrepo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllLichHens()
        {
            try
            {
                return Ok(await _lichhenrepo.GetAllLichHensAsync());
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{malh}")]
        public async Task<IActionResult> GetLichHen(int malh)
        {
            var lichhen = await _lichhenrepo.GetLichHenAsync(malh);

            if (lichhen == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(lichhen);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddNewLichHen(LichHenModel model)
        {
            try
            {
                var newlichhen = await _lichhenrepo.AddLichHenAsync(model);
                var lichhen = await _lichhenrepo.GetLichHenAsync(newlichhen);

                if (lichhen == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(lichhen);
                }
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{malh}")]
        public async Task<IActionResult> UpdateLichHen(int malh, LichHenModel model)
        {
            if (malh != model.MaLH)
            {
                return NotFound();
            }
            else
            {
                await _lichhenrepo.UpdateLichHenAsync(malh, model);
                return Ok();
            }
        }

        [HttpDelete("{malh}")]
        public async Task<ActionResult> DeleteLichHen(int malh)
        {
            await _lichhenrepo.DeleteLichHenAsync(malh);
            return Ok();
        }
    }
}
