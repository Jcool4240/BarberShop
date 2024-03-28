using BackEnd.Models;
using BackEnd.Repositorys;
using BackEnd.DATA;
using BackEnd.Models;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChiTietDonHangController : ControllerBase
    {
        protected readonly IChiTietDonHangRepository _chitietdonhangrepo;

        public ChiTietDonHangController(IChiTietDonHangRepository repo)
        {
            _chitietdonhangrepo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllChiTietDonHangs()
        {
            try
            {
                return Ok(await _chitietdonhangrepo.GetAllCTDHsAsync());
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{mactdh}")]
        public async Task<IActionResult> GetChiTietDonHang(int mactdh)
        {
            var ChiTietDonHang = await _chitietdonhangrepo.GetCTDHAsync(mactdh);

            if (ChiTietDonHang == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(ChiTietDonHang);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddNewChiTietDonHang(ChiTietDonHangModel model)
        {
            try
            {
                var newChiTietDonHang = await _chitietdonhangrepo.AddCTDHAsync(model);
                var ChiTietDonHang = await _chitietdonhangrepo.GetCTDHAsync(newChiTietDonHang);

                if (ChiTietDonHang == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(ChiTietDonHang);
                }
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //=========
        
        //===

        [HttpPut("{mactdh}")]
        public async Task<IActionResult> UpdateChiTietDonHang(int mactdh, ChiTietDonHangModel model)
        {
            if (mactdh != model.MaDH)
            {
                return NotFound();
            }
            else
            {
                await _chitietdonhangrepo.GetCTDHAsync(mactdh);
                return Ok();
            }
        }

        [HttpDelete("{mactdh}")]
        public async Task<ActionResult> DeleteChiTietDonHang(int mactdh)
        {
            await _chitietdonhangrepo.GetCTDHAsync(mactdh);
            return Ok();
        }
    }
}
