using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class fixorder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<string>(
                name: "Id",
                table: "DonHang",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1865f962-f8c0-49d6-9841-23f0258a4afc", "ee95c4fc-2259-4475-9234-fead4f5b31a1", "Manager", "MANAGER" },
                    { "7635d43a-c49f-48a3-81d3-90fa80569408", "8831864d-c094-45cd-bc72-d2b651437b5b", "Baber", "BABER" },
                    { "7c9a4c85-6cdd-4efa-89f9-b85df49231bb", "9adf58dd-68b1-469e-9514-35fe19d0ce25", "Admin", "ADMIN" },
                    { "9de23c69-e9c4-4c25-8115-67d9d6729ce5", "e1a7b5c1-39ee-4684-a9b8-97f9362637b3", "Owner", "OWNER" },
                    { "cc55a993-53c3-4725-9f78-cafa0161c0b5", "92502349-a7b7-4dd9-97cf-91a4c4106d87", "User", "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_DonHang_Id",
                table: "DonHang",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DonHang_AspNetUsers_Id",
                table: "DonHang",
                column: "Id",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DonHang_AspNetUsers_Id",
                table: "DonHang");

            migrationBuilder.DropIndex(
                name: "IX_DonHang_Id",
                table: "DonHang");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1865f962-f8c0-49d6-9841-23f0258a4afc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7635d43a-c49f-48a3-81d3-90fa80569408");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7c9a4c85-6cdd-4efa-89f9-b85df49231bb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9de23c69-e9c4-4c25-8115-67d9d6729ce5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cc55a993-53c3-4725-9f78-cafa0161c0b5");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "DonHang");

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
    }
}
