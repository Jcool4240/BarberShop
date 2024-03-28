using BackEnd.Models;
using BackEnd.DATA;
using Microsoft.AspNetCore.Identity;

namespace BackEnd.Repositorys
{
    public class AccountRepository : IAccountRepository
    {
        private readonly UserManager<CustomUser> _userManager;

        public AccountRepository(UserManager<CustomUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<IdentityResult> SignUpAsync(RegisterUserModel model)
        {
            var user = new CustomUser
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                UserName = model.UserName,
                MaCH = model.MaCH,
                MaCN = model.MaCN,
                MaTCT = model.MaTCT
            };

            if (user.Email!.ToLower().StartsWith("admin"))
            {
                await _userManager.CreateAsync(user, model.Password);
                return await _userManager.AddToRoleAsync(user, "ADMIN");
            }
            else
            {
                await _userManager.CreateAsync(user, model.Password);
                return await _userManager.AddToRoleAsync(user, "User");
            }
        }
    }
}