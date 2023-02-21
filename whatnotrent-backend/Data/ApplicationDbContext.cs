using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;
using el_proyecte_grande.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.VisualBasic;

namespace el_proyecte_grande.Data;

public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
{
    public DbSet<Product> Product { get; set; }
    public DbSet<Category> Category { get; set; }
    public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
        : base(options, operationalStoreOptions)
    {
    }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        // builder.Entity<Documents>().HasOne(d=>d.Client).OnDelete(DeleteBehavior.Cascade);
        builder.Entity<IdentityRole>().HasData(
            new IdentityRole { Name = "Poweruser", NormalizedName = "POWERUSER" },
            new IdentityRole { Name = "Admin", NormalizedName = "ADMIN" },
            new IdentityRole { Name = "Employee", NormalizedName = "EMPLOYEE" },
            new IdentityRole { Name = "Prospect", NormalizedName = "PROSPECT" },
            new IdentityRole { Name = "Pending", NormalizedName = "PENDING" },
            new IdentityRole { Name = "Investor", NormalizedName = "INVESTOR" });

    }
}