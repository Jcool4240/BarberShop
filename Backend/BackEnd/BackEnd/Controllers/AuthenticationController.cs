using BackEnd.Models;
using BackEnd.Repositorys;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAccountRepository accountRepo;

        public AuthenticationController(IAccountRepository repo)
        {
            accountRepo = repo;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> SignUp(RegisterUserModel signUpModel)
        {
            var result = await accountRepo.SignUpAsync(signUpModel);
            if (result.Succeeded)
            {
                return Ok(result.Succeeded);
            }

            return Unauthorized();
        }

        [HttpGet("userinfo")]
        [Authorize]
        public IActionResult GetUserInfo()
        {
            try
            {
                var userId = User.FindFirst("userID")?.Value;
                var userName = User.FindFirst(ClaimTypes.Name)?.Value;
                var userRole = User.FindFirst(ClaimTypes.Role)?.Value;


                if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(userRole) || string.IsNullOrEmpty(userId))
                {
                    return BadRequest("Thông tin người dùng không hợp lệ.");
                }

                return Ok(new { UserId = userId, UserName = userName, UserRole = userRole });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Đã xảy ra lỗi: {ex.Message}");
            }
        }
    }
}
