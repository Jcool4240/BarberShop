using BackEnd.Models;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoaiDVsController : ControllerBase
    {
        private readonly ILoaiDVRepository _loaidvrepo;

        public LoaiDVsController(ILoaiDVRepository repo)
        {
            _loaidvrepo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllLoaiDVs()
        {
            try
            {
                return Ok(await _loaidvrepo.GetAllLoaiDVsAsync());
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("{maldv}")]
        public async Task<IActionResult> GetLoaiDV(int maldv)
        {
            var loaidv = await _loaidvrepo.GetLoaiDVAsync(maldv);

            if (loaidv == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(loaidv);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddNewLoaiDV(LoaiDVModel model)
        {
            try
            {
                var newloaidv = await _loaidvrepo.AddLoaiDVAsync(model);
                var loaidv = await _loaidvrepo.GetLoaiDVAsync(newloaidv);

                if (loaidv == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(loaidv);
                }
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{maldv}")]
        public async Task<IActionResult> UpdateLoaiDV(int maldv, LoaiDVModel model)
        {
            if (maldv != model.MaLDV)
            {
                return NotFound();
            }
            else
            {
                await _loaidvrepo.UpdateLoaiDVAsync(maldv, model);
                return Ok();
            }
        }

        [HttpDelete("{maldv}")]
        public async Task<ActionResult> DeleteLoaiDV(int maldv)
        {
            await _loaidvrepo.DeleteLoaiDVAsync(maldv);
            return Ok();
        }
    }
}