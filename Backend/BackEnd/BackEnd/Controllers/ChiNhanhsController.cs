using BackEnd.Models;
using BackEnd.Repositorys;
using BackEnd.DATA;
using BackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChiNhanhsController : ControllerBase
    {
        protected readonly UnitOfWork _unitOfWork;

        public ChiNhanhsController(UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public IActionResult GetAllChiNhanhs()
        {
            try
            {
                var chinhanhs = _unitOfWork.ChiNhanhRepository.GetAll<ChiNhanhModel>();
                return Ok(chinhanhs);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{macn}")]
        public IActionResult GetChiNhanh(int macn)
        {
            var chinhanh = _unitOfWork.ChiNhanhRepository.GetById<ChiNhanhModel>(macn);
            if (chinhanh == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(chinhanh);
            }
        }

        [HttpPost]
        public IActionResult AddNewChiNhanh(ChiNhanhModel model)
        {
            try
            {
                if (model == null)
                {
                    return NotFound(model);
                }
                var chinhanh = _unitOfWork.Mapper.Map<ChiNhanh>(model);
                _unitOfWork.ChiNhanhRepository.Add(chinhanh);
                _unitOfWork.Commit();

                if (chinhanh == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(chinhanh);
                }
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{macn}")]
        public async Task<IActionResult> UpdateChiNhanh(int macn, ChiNhanhModel model)
        {
            var existingBookingEntity = _unitOfWork.ChiNhanhRepository.GetById<ChiNhanhModel>(macn);
            if (macn != model.MaCN)
            {
                return NotFound();
            }
            else
            {
                var modelE = _unitOfWork.Mapper.Map<ChiNhanh>(model);
                await _unitOfWork.ChiNhanhRepository.UpdateProperties(macn, modelE);
                return Ok();
            }
        }

        [HttpDelete("{macn}")]
        public async Task<ActionResult> DeleteChiNhanh(int mach)
        {
            await _unitOfWork.ChiNhanhRepository.Delete(mach);
            return Ok();
        }
    }
}
