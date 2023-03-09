using DeveloperAssignment.Domain;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace DeveloperAssignment.Infrastructure
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Items>()
            .HasOne(t => t.Categories)
            .WithMany(s => s.Items)
            .HasPrincipalKey("CategoryId")
            .HasForeignKey("CategoryId");
        }

        public DbSet<Categories> Categories { get; set; }
        public DbSet<Items> Items { get; set; }


    }
}