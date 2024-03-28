using BackEnd.DATA;
using BackEnd.Models;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DonHangsController : ControllerBase
    {
        private readonly IDonHangRepository _donhangrepo;
        private readonly BarberShopContext _context;

        public DonHangsController(IDonHangRepository repo, BarberShopContext context)
        {
            _donhangrepo = repo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDonHangs()
        {
            try
            {
                return Ok(await _donhangrepo.GetAllDonHangsAsync());
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{madh}")]
        public async Task<IActionResult> GetDonHang(int madh)
        {
            var donhang = await _donhangrepo.GetDonHangAsync(madh);

            if (donhang == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(donhang);
            }
        }

        //[HttpPost]
        //public async Task<IActionResult> AddNewDonHang(DonHang model)
        //{
        //    try
        //    {
        //        var newdonhang = await _donhangrepo.AddDonHangAsync(model);
        //        var donhang = await _donhangrepo.GetDonHangAsync(newdonhang);

        //        if (donhang == null)
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            return Ok(donhang);
        //        }
        //    }
        //    catch
        //    {
        //        return BadRequest();
        //    }
        //}
        //===
        [HttpPost("dat-hang")]
        public async Task<IActionResult> DatHang(DonHangModel donHangModel)
        {
            try
            {
                DateTime currentDate = DateTime.Now;

                Random random = new Random();
                int daysToAdd = random.Next(3, 5);
                DateTime deliveryDate = currentDate.AddDays(daysToAdd);

                var donHang = new DonHang
                {
                    NgayDat = DateTime.Now,
                    NgayGiao = deliveryDate,
                    TrangThaiDH = 0,
                    TongTien = donHangModel.TongTien,
                    DiaChiGH = donHangModel.DiaChiGH,
                    SoDienThoai = donHangModel.SoDienThoai,
                    Id = donHangModel.Id,
                };

                await _donhangrepo.AddDonHangAsync(donHang);
                await _context.SaveChangesAsync();

                return Ok(new
                {
                    Message = "Đặt hàng thành công!",
                    DeliveryDate = deliveryDate,
                    MaDH = donHang.MaDH
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = "Đặt hàng thất bại.", Error = ex.Message });
            }
        }
        //==

        [HttpPut("{madh}")]
        public async Task<IActionResult> UpdateDonHang(int madh, DonHangModel model)
        {
            if (madh != model.MaDH)
            {
                return NotFound();
            }
            else
            {
                await _donhangrepo.UpdateDonHangAsync(madh, model);
                return Ok();
            }
        }

        [HttpDelete("{madh}")]
        public async Task<ActionResult> DeleteDonHang(int madh)
        {
            await _donhangrepo.DeleteDonHangAsync(madh);
            return Ok();
        }
    }
}
