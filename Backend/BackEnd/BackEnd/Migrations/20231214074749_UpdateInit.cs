using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class UpdateInit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0e6be0bc-906a-4958-bf42-af85b557622a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5398269f-bb35-47fd-8b8d-9bb4bf920bbf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "81165ee8-b3f0-45e1-9fd3-e5459c730783");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "861e0bf1-fa96-4b87-b929-a319b4a35db6");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0702635a-c337-41fe-8f71-43909ccca5f5", "41c24142-f6d9-44cf-93e6-e6a1e2b806a6", "User", "USER" },
                    { "51d0d45c-9d49-476e-ab27-10925fa6b8f3", "115c9178-a43c-4fcc-b28d-589a030cb7b2", "Manager", "MANAGER" },
                    { "5b954003-4bf8-4dab-9f00-5d014fcd3744", "a03005c0-e591-4361-83b4-538407eebc1c", "Baber", "BABER" },
                    { "74d8e772-b1d9-462a-8cdd-0e04d9d32150", "818f4373-d7be-40f2-ba32-478b1b517cf2", "Admin", "ADMIN" },
                    { "9628926c-578d-46fc-a3be-0fb249e5275d", "58d5fe6d-df0e-46f3-b5d0-de51c199a67e", "Owner", "OWNER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0702635a-c337-41fe-8f71-43909ccca5f5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "51d0d45c-9d49-476e-ab27-10925fa6b8f3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5b954003-4bf8-4dab-9f00-5d014fcd3744");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "74d8e772-b1d9-462a-8cdd-0e04d9d32150");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9628926c-578d-46fc-a3be-0fb249e5275d");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0e6be0bc-906a-4958-bf42-af85b557622a", "a4219c16-2393-4e4f-a9df-87eb03acf07a", "Manager", "MANAGER" },
                    { "5398269f-bb35-47fd-8b8d-9bb4bf920bbf", "9b08bba2-88c4-4a19-807c-c69b1fc4bace", "Owner", "OWNER" },
                    { "81165ee8-b3f0-45e1-9fd3-e5459c730783", "2d12f156-125d-4ad9-be70-375b64e028a6", "User", "USER" },
                    { "861e0bf1-fa96-4b87-b929-a319b4a35db6", "978a1acf-b016-49a8-8c68-0168bc5ae1d5", "Admin", "ADMIN" }
                });
        }
    }
}
