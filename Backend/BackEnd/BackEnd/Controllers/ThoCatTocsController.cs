using BackEnd.Models;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThoCatTocsController : ControllerBase
    {
        private readonly IThoCatTocRepository _thocattocrepo;

        public ThoCatTocsController(IThoCatTocRepository repo)
        {
            _thocattocrepo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllThoCatTocs()
        {
            try
            {
                return Ok(await _thocattocrepo.GetAllThoCatTocsAsync());
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{matct}")]
        public async Task<IActionResult> GetThoCatToc(int matct)
        {
            var thocattoc = await _thocattocrepo.GetThoCatTocAsync(matct);

            if (thocattoc == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(thocattoc);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddNewThoCatToc(ThoCatTocModel model)
        {
            try
            {
                var newthocattoc = await _thocattocrepo.AddThoCatTocAsync(model);
                var thocattoc = await _thocattocrepo.GetThoCatTocAsync(newthocattoc);

                if (thocattoc == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(thocattoc);
                }
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{matct}")]
        public async Task<IActionResult> UpdateThoCatToc(int matct, ThoCatTocModel model)
        {
            if (matct != model.MaTCT)
            {
                return NotFound();
            }
            else
            {
                await _thocattocrepo.UpdateThoCatTocAsync(matct, model);
                return Ok();
            }
        }

        [HttpDelete("{matct}")]
        public async Task<ActionResult> DeleteThoCatToc(int matct)
        {
            await _thocattocrepo.DeleteThoCatTocAsync(matct);
            return Ok();
        }
    }
}
