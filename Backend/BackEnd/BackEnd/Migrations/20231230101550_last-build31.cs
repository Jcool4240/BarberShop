using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class lastbuild31 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<string>(
                name: "Iduser",
                table: "LichHen",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "00fa305a-2b86-47a5-98d6-2bcab2a1914a", "6feaf320-7be5-4a76-86c7-c7c06c243762", "Manager", "MANAGER" },
                    { "695d8adb-ec67-4bc4-b65f-728e675f3eeb", "7094893c-d6f5-4093-b082-db78466eba8e", "User", "USER" },
                    { "7c7e682b-35e8-40ed-a968-d65880bec1f8", "95eea9aa-98f3-4fe6-92ca-8f5641cd052a", "Baber", "BABER" },
                    { "91a26046-f4f7-4e3d-82b0-3b20be09614e", "9c78b8d7-e372-4906-9598-b1b19aa2b5aa", "Admin", "ADMIN" },
                    { "a2db4f4b-5d8b-4c39-9783-b2bfb84727e5", "d3dafc20-99f1-4815-bef0-ceedda340703", "Owner", "OWNER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "00fa305a-2b86-47a5-98d6-2bcab2a1914a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "695d8adb-ec67-4bc4-b65f-728e675f3eeb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7c7e682b-35e8-40ed-a968-d65880bec1f8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "91a26046-f4f7-4e3d-82b0-3b20be09614e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a2db4f4b-5d8b-4c39-9783-b2bfb84727e5");

            migrationBuilder.DropColumn(
                name: "Iduser",
                table: "LichHen");

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
    }
}
