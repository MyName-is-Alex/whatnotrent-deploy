using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace What_Not_Rent.Data.Migrations
{
    public partial class UpdateProductPhotoStorage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0f99b454-54ba-4915-ad1a-9f8190d81a4a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "289f7f98-4984-45f6-aee4-dc184bceede8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3f4b3789-ec18-47ca-a85c-e7698e22da92");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "608f0d27-27bd-4f84-94da-7c5c0e73ef9e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a37283f7-4a19-4001-b550-52d524508529");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b0f4e58f-f9e5-45fe-9398-65adc43214a4");

            migrationBuilder.CreateTable(
                name: "ProductPhotos",
                columns: table => new
                {
                    PhotoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    PhotoUrl = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductPhotos", x => x.PhotoId);
                    table.ForeignKey(
                        name: "FK_ProductPhotos_Product_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Product",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductPhotos_ProductId",
                table: "ProductPhotos",
                column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductPhotos");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0f99b454-54ba-4915-ad1a-9f8190d81a4a", "2b06998e-5eed-4941-bcb4-6b07e9addf27", "Prospect", "PROSPECT" },
                    { "289f7f98-4984-45f6-aee4-dc184bceede8", "f7a0ba03-9d9d-4af5-8e41-7b838fac084c", "Employee", "EMPLOYEE" },
                    { "3f4b3789-ec18-47ca-a85c-e7698e22da92", "f74bdf04-ed1d-4f3a-bcbd-d064c62bb62f", "Investor", "INVESTOR" },
                    { "608f0d27-27bd-4f84-94da-7c5c0e73ef9e", "9498766f-ec79-4df0-81fd-9757d3170768", "Admin", "ADMIN" },
                    { "a37283f7-4a19-4001-b550-52d524508529", "ef65c615-8082-4ab9-849b-faeb22162b99", "Pending", "PENDING" },
                    { "b0f4e58f-f9e5-45fe-9398-65adc43214a4", "3e24a0f8-9a3e-49a4-9677-00b318f24d6b", "Poweruser", "POWERUSER" }
                });
        }
    }
}
