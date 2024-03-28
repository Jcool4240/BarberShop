using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class fixctdhv1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "10948710-89d2-4987-8f00-2bcfadba42f1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2b8bb681-0bbe-4079-8d8a-b58e3904cbf3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6e629f23-6ff0-4504-b463-1132083bee08");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b8896ba1-d3bf-4367-893d-adfb5a0d6046");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f3235e4d-eaa9-4b4b-99a1-6c4b5207306b");

            migrationBuilder.DropColumn(
                name: "MaCTDH",
                table: "ChiTietDonHang");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2d42d32b-0d81-48b8-9175-1de80fd9db35", "d3502050-3228-433d-bc93-9dfc93281485", "Baber", "BABER" },
                    { "4bec7b5a-0d8a-4d67-b55b-bdc189cae90f", "a4c40108-2784-4ee2-a56e-a92c538bda65", "Owner", "OWNER" },
                    { "4ced1eba-4b05-41ad-bc65-d127ec602414", "03e31630-3fe4-4920-bb9c-bce81cf43972", "Manager", "MANAGER" },
                    { "5a71cb8b-4006-4e83-a8db-19eff7186583", "8be4fe43-bf31-4c07-94d2-d3402e9bc622", "User", "USER" },
                    { "ef733525-e87f-4898-8226-cec80d9f19ec", "d705204a-47b0-4f18-ba12-cec7d463c220", "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2d42d32b-0d81-48b8-9175-1de80fd9db35");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4bec7b5a-0d8a-4d67-b55b-bdc189cae90f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4ced1eba-4b05-41ad-bc65-d127ec602414");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5a71cb8b-4006-4e83-a8db-19eff7186583");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ef733525-e87f-4898-8226-cec80d9f19ec");

            migrationBuilder.AddColumn<int>(
                name: "MaCTDH",
                table: "ChiTietDonHang",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "10948710-89d2-4987-8f00-2bcfadba42f1", "eb260aa1-16d0-4879-a111-520c0aab714a", "Baber", "BABER" },
                    { "2b8bb681-0bbe-4079-8d8a-b58e3904cbf3", "d2c0a143-99eb-49da-8c54-8738ee50154f", "User", "USER" },
                    { "6e629f23-6ff0-4504-b463-1132083bee08", "72644cfd-54d4-4710-993e-93a004462520", "Admin", "ADMIN" },
                    { "b8896ba1-d3bf-4367-893d-adfb5a0d6046", "c8c7305e-ce3d-4c38-b1f7-72a358b444dd", "Owner", "OWNER" },
                    { "f3235e4d-eaa9-4b4b-99a1-6c4b5207306b", "f3066294-1775-4255-9600-bfac88b792f0", "Manager", "MANAGER" }
                });
        }
    }
}
