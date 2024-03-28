using BackEnd.Repositorys;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DHADController : ControllerBase
    {
        private readonly IDonHangRepository _donhangrepo;

        public DHADController(IDonHangRepository repo)
        {
            _donhangrepo = repo;
        }

        //[HttpGet]
        //[Route("{mach}")]
        //public async Task<IActionResult> GetDHAD(int mach)
        //{
        //    var donhang = await _donhangrepo.GetAllDonHang1Async(mach);
        //    if (donhang == null)
        //    {
        //        return NotFound();
        //    }
        //    else
        //    {
        //        return Ok(donhang);
        //    }
        //}
    }
}