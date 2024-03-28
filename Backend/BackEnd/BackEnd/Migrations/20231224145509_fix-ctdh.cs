using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class fixctdh : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2889abe3-ddcf-4b2a-9b8c-93c914d9bebd");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9416b358-c73f-4500-b770-a1d44aa16f82");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "94189293-5ee1-4515-89e6-e8cc1377f3dc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cb3f1be0-f2b0-402d-a767-126011e6e64a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e3df8728-e96a-4091-9013-94406e3277a2");

            migrationBuilder.DropColumn(
                name: "DonGia",
                table: "ChiTietDonHang");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<double>(
                name: "DonGia",
                table: "ChiTietDonHang",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2889abe3-ddcf-4b2a-9b8c-93c914d9bebd", "28ece0a4-ab1a-4d59-a605-620fe25d4ca3", "Baber", "BABER" },
                    { "9416b358-c73f-4500-b770-a1d44aa16f82", "5eebb4b1-e68f-4a0a-a793-19b72da46486", "Owner", "OWNER" },
                    { "94189293-5ee1-4515-89e6-e8cc1377f3dc", "fe636da3-96df-410e-8d4e-104cba44d473", "Manager", "MANAGER" },
                    { "cb3f1be0-f2b0-402d-a767-126011e6e64a", "079457ec-6d39-4aaf-9911-a51f9aab5986", "Admin", "ADMIN" },
                    { "e3df8728-e96a-4091-9013-94406e3277a2", "6f7e21be-dfb0-4715-9ae5-d42be54d146d", "User", "USER" }
                });
        }
    }
}
