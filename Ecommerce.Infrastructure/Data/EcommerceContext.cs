#region using
using Ecommerce.Core.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
#endregion

namespace Ecommerce.Infrastructure.Data
{
    public class EcommerceContext : IdentityDbContext<AppUser, AppRole, Guid>
    {
        public EcommerceContext(DbContextOptions<EcommerceContext> options) : base(options)
        {
        }

        public DbSet<Brand> Brands { get; set; }
        public DbSet<Colour> Colours { get; set; }
        public DbSet<Feature> Features { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<OS> OS { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductFeature> ProductFeatures { get; set; }
        public DbSet<ProductVariant> ProductVariants { get; set; }
        public DbSet<Storage> Storages { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Relationships
            builder.Entity<Product>()
            .HasIndex(b => b.Slug)
            .IsUnique();

            builder.Entity<ProductFeature>()
              .HasKey(x => new { x.ProductId, x.FeatureId });

            builder.Entity<ProductVariant>()
              .HasKey(x => new { x.ProductId, x.ColourId, x.StorageId });

            builder.Entity<Order>()
              .OwnsOne(x => x.DeliveryAddress);

            builder.Entity<AppUser>()
              .HasIndex(x => x.RefreshToken)
              .IsUnique();

            // Rename the ASP.NET Identity table names
            // https://github.com/aspnet/Identity/issues/300
            var entityTypes = builder.Model.GetEntityTypes();
            foreach (var entityType in entityTypes)
            {
                var table = entityType.Relational().TableName;
                if (table.StartsWith("AspNet"))
                {
                    // Remove AspNet prefix
                    entityType.Relational().TableName = table.Substring(6);
                }
            }
        }
    }
}
