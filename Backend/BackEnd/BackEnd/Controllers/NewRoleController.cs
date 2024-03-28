using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using BackEnd.DATA;
using BackEnd.Models;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewRoleController : ControllerBase
    {
        private readonly UserManager<CustomUser> _userManager;

        public NewRoleController(UserManager<CustomUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<ActionResult> AssignRole(ClassModel model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email!);
            if (user != null)
            {
                var userRoles = await _userManager.GetRolesAsync(user);
                await _userManager.RemoveFromRolesAsync(user, userRoles);
                await _userManager.AddToRoleAsync(user, model.Name!);
                return Ok();
            }
            return BadRequest();
        }
    }
}
