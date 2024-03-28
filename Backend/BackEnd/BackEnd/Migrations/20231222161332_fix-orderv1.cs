using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class fixorderv1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0706fe42-20cc-4989-b350-12df0b0868af", "a98cd1ea-58f2-43dd-9198-784baa4ff7b7", "Admin", "ADMIN" },
                    { "14ecede0-00c0-421e-b682-8f4a17a4e819", "cf1ab103-ea51-4129-8ca5-6d0199f2131a", "Manager", "MANAGER" },
                    { "47821551-e1fc-4c88-91ec-43514787194a", "490def1a-d47c-4544-b8fe-510a7696f271", "Baber", "BABER" },
                    { "b148262a-6df1-43ca-844d-0772d8d2b8ca", "fdca7485-8495-4b4b-ae30-e96f1b18f5fd", "Owner", "OWNER" },
                    { "d14d8f1b-ad40-4935-b4bc-2dcb87891933", "10d65fb9-ba85-4a97-9e11-ce9448e13966", "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0706fe42-20cc-4989-b350-12df0b0868af");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "14ecede0-00c0-421e-b682-8f4a17a4e819");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "47821551-e1fc-4c88-91ec-43514787194a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b148262a-6df1-43ca-844d-0772d8d2b8ca");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d14d8f1b-ad40-4935-b4bc-2dcb87891933");

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
        }
    }
}
