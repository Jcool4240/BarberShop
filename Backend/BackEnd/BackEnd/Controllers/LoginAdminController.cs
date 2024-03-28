using BackEnd.Models;
using BackEnd.Repositorys;
using BackEnd.DATA;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using static BackEnd.Repositorys.AuthRepository;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginAdminController : ControllerBase
    {
        private readonly IAuthRepository authRepo;

        public LoginAdminController(IAuthRepository repo)
        {
            authRepo = repo;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var authResult = await authRepo.AuthenticateAsync(model);
            if (authResult == null)
            {
                return Unauthorized();
            }

            return Ok(new
            {
                token = authResult.Token,
                user = authResult.User
            });
        }

        [HttpPost("loginuser")]
        public async Task<IActionResult> LoginUser(LoginModel model)
        {
            var auResult = await authRepo.AuthenticateUserAsync(model);
            if (auResult == null)
            {
                return Unauthorized();
            }

            return Ok(new
            {
                token = auResult.Token,
                user = auResult.User
            });
        }
    }
}
