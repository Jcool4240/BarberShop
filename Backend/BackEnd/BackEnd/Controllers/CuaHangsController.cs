using BackEnd;
using BackEnd.DATA;
using BackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuaHangsController : ControllerBase
    {
        protected readonly UnitOfWork _unitOfWork;
        public CuaHangsController(UnitOfWork unitOfWork)
        {
             _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public IActionResult GetAllCuaHangs()
        {
            try
            {
                var cuahang = _unitOfWork.CuaHangRepository.GetAll<CuaHangModel>();
                return Ok(cuahang);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{mach}")]
        public IActionResult GetCuaHang(int mach)
        {
            var cuahang = _unitOfWork.CuaHangRepository.GetById<CuaHangModel>(mach);

            if (cuahang == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(cuahang);
            }
        }

        [HttpPost]
        public IActionResult AddNewCuaHang(CuaHangModel model)
        {
            try
            {
                if(model == null)
                {
                    return NotFound(model);
                }
                var cuahang = _unitOfWork.Mapper.Map<CuaHang>(model);
                _unitOfWork.CuaHangRepository.Add(cuahang);
                _unitOfWork.Commit();

                if (cuahang == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(cuahang);
                }
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{mach}")]
        public async Task<IActionResult> UpdateCuaHang(int mach, CuaHangModel model)
        {
            var existingBookingEntity = _unitOfWork.CuaHangRepository.GetById<CuaHangModel>(mach);
            if (mach != model.MaCH)
            {
                return NotFound();
            }
            else
            {
                var modelE = _unitOfWork.Mapper.Map<CuaHang>(model);
                await _unitOfWork.CuaHangRepository.UpdateProperties(mach, modelE);
                return Ok();
            }
        }

        [HttpDelete("{mach}")]
        public async Task<ActionResult> DeleteCuaHang(int mach)
        {
            await _unitOfWork.CuaHangRepository.Delete(mach);
            return Ok();
        }
    }
}
