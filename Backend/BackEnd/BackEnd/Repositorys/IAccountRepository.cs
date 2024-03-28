using BackEnd.Models;
using Microsoft.AspNetCore.Identity;

namespace BackEnd.Repositorys
{
    public interface IAccountRepository
    {
        public Task<IdentityResult> SignUpAsync(RegisterUserModel model);
    }
}
