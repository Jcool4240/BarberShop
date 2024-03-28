using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class fixdathangv1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropColumn(
                name: "MaCH",
                table: "DonHang");

            migrationBuilder.DropColumn(
                name: "MaCN",
                table: "DonHang");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "MaCH",
                table: "DonHang",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MaCN",
                table: "DonHang",
                type: "int",
                nullable: true);

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
    }
}
