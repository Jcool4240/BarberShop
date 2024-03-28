using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class lastbuild30 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<string>(
                name: "DiaChiGH",
                table: "DonHang",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "SoDienThoai",
                table: "DonHang",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0f25366a-2aec-4629-a50c-7cdfe4b7ea1b", "e2573435-0ba2-4153-af46-dd38d39c5d69", "User", "USER" },
                    { "3a551953-cd93-4c9d-bee9-ab188831faea", "bd72c646-df25-4b3b-85fd-0ddffc000afa", "Owner", "OWNER" },
                    { "deef36af-a601-401c-8e69-20566313cf7e", "98852a84-bd44-4173-9c2a-6379d9e67bac", "Baber", "BABER" },
                    { "e4c8c6f2-ed50-4ec7-ab50-efe62c772d50", "b2d42c67-1379-4c4d-8c84-d833e7937049", "Admin", "ADMIN" },
                    { "f88eea62-03f4-4b83-872c-9366409f0244", "a0c494be-a054-4c8c-8ddd-897b2db741e5", "Manager", "MANAGER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0f25366a-2aec-4629-a50c-7cdfe4b7ea1b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3a551953-cd93-4c9d-bee9-ab188831faea");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "deef36af-a601-401c-8e69-20566313cf7e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e4c8c6f2-ed50-4ec7-ab50-efe62c772d50");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f88eea62-03f4-4b83-872c-9366409f0244");

            migrationBuilder.DropColumn(
                name: "SoDienThoai",
                table: "DonHang");

            migrationBuilder.AlterColumn<string>(
                name: "DiaChiGH",
                table: "DonHang",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

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
    }
}
