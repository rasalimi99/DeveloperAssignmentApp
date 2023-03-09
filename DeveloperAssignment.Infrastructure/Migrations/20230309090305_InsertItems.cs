using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DeveloperAssignment.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InsertItems : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Categories(CategoryName) Values('Electronics')");
            migrationBuilder.Sql("INSERT INTO Categories(CategoryName) Values('Clothing')");
            migrationBuilder.Sql("INSERT INTO Categories(CategoryName) Values('Smart Phone')");

            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 1',10,1)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 2',15,2)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 3',25,3)");

            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 4',10,1)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 5',15,2)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 6',25,3)");

            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 7',10,1)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 8',15,2)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 9',25,3)");

            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 10',10,1)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 11',15,2)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 12',25,3)");

            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 13',10,1)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 14',15,2)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 15',25,3)");

            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 16',10,1)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 17',15,2)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 18',25,3)");

            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 19',10,1)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 20',15,2)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 21',25,3)");

            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 22',10,1)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 23',15,2)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 24',25,3)");

            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 25',10,1)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 26',15,2)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 27',25,3)");

            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 28',10,1)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 29',15,2)");
            migrationBuilder.Sql("INSERT INTO items(Name,Cost,CategoryId) Values('Item 30',25,3)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
