using Ecommerce.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ecommerce.Infrastructure.Data
{
    public class EcommerceDbInitializer
    {
        private ILogger<EcommerceDbInitializer> _logger;
        private readonly EcommerceContext _context;
        private UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;

        public EcommerceDbInitializer(ILogger<EcommerceDbInitializer> logger, EcommerceContext context, UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
        {
            _logger = logger;
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async Task SeedAsync()
        {
            // Run migrations
            await _context.Database.MigrateAsync();

            // Insert test data
            await AddRoles();
            await AddColoursFeaturesAndStorages();
            await AddOperatingSystemsAndBrands();
            await AddProducts();
        }

        private async Task AddRoles()
        {
            if (!_context.Roles.Any())
            {
                await _roleManager.CreateAsync(new AppRole("Admin"));
                await _roleManager.CreateAsync(new AppRole("Customer"));
            }
        }

        private async Task AddColoursFeaturesAndStorages()
        {
            if (!_context.Colours.Any())
            {
                var colours = new List<string>() { "Black", "White", "Gold", "Silver", "Grey", "Spacegrey", "Red", "Pink" };

                colours.ForEach(c => _context.Add(new Colour
                {
                    Name = c
                }));

                await _context.SaveChangesAsync();
            }

            if (!_context.Features.Any())
            {
                var features = new List<string>() { "3G", "4G", "Bluetooth", "WiFi", "Fast charge", "GPS", "NFC" };

                features.ForEach(f => _context.Add(new Feature
                {
                    Name = f
                }));

                await _context.SaveChangesAsync();
            }

            if (!_context.Storages.Any())
            {
                var storage = new List<int>() { 4, 8, 16, 32, 64, 128, 256 };

                storage.ForEach(s => _context.Storages.Add(new Storage
                {
                    Capacity = s
                }));

                await _context.SaveChangesAsync();
            }
        }

        private async Task AddOperatingSystemsAndBrands()
        {
            if (!_context.OS.Any())
            {
                var os = new List<string>() { "Android", "iOS", "Windows" };

                os.ForEach(o => _context.OS.Add(new OS
                {
                    Name = o
                }));

                await _context.SaveChangesAsync();
            }

            if (!_context.Brands.Any())
            {
                var brands = new List<string>() { "Acme", "Globex", "Soylent", "Initech", "Umbrella" };

                brands.ForEach(b => _context.Brands.Add(new Brand
                {
                    Name = b
                }));

                await _context.SaveChangesAsync();
            }
        }

        private async Task AddProducts()
        {
            if (!_context.Products.Any())
            {
                var products = new List<Product>()
        {
          new Product
          {
            Name = "Acme TNT 4",
            Slug = "acme-tnt-4",
            Thumbnail = "/assets/images/thumbnail.jpeg",
            ShortDescription = "Acme TNT 4 Android smartphone with true edge to edge display",
            Description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora ad cum laudantium, omnis fugit amet iure animi corporis labore repellat magnam perspiciatis explicabo maiores fuga provident a obcaecati tenetur nostrum, quidem quod dignissimos, voluptatem quasi? Nisi quaerat, fugit voluptas ducimus facilis impedit quod dicta, laborum sint iure nihil veniam aspernatur delectus officia culpa, at cupiditate? Totam minima ut deleniti laboriosam dolores cumque in, nesciunt optio! Quod recusandae voluptate facere pariatur soluta vel corrupti tenetur aut maiores, cumque mollitia fugiat laudantium error odit voluptas nobis laboriosam quo, rem deleniti? Iste quidem amet perferendis sed iusto tempora modi illo tempore quibusdam laborum? Dicta aliquam libero, facere, maxime corporis qui officiis explicabo aspernatur non consequatur mollitia iure magnam odit enim. Eligendi suscipit, optio officiis repellat eos quis iure? Omnis, error aliquid quibusdam iste amet nihil nisi cumque magni sequi enim illo autem nesciunt optio accusantium animi commodi tenetur neque eum vitae est.",
            ScreenSize = 5M,
            TalkTime = 8M,
            StandbyTime = 36M,
            Brand = _context.Brands.Single(b => b.Name == "Acme"),
            OS = _context.OS.Single(os => os.Name == "Android"),
            Images = new List<Image>
            {
              new Image { Url = "/assets/images/gallery1.jpeg" },
              new Image { Url = "/assets/images/gallery2.jpeg" },
              new Image { Url = "/assets/images/gallery3.jpeg" },
              new Image { Url = "/assets/images/gallery4.jpeg" },
              new Image { Url = "/assets/images/gallery5.jpeg" },
              new Image { Url = "/assets/images/gallery6.jpeg" }
            },
            ProductFeatures = new List<ProductFeature>
            {
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "3G")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "Bluetooth")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "WiFi")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "GPS")
              }
            },
            ProductVariants = new List<ProductVariant>
            {
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Black"),
                Storage = _context.Storages.Single(s => s.Capacity == 32),
                Price = 299M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Black"),
                Storage = _context.Storages.Single(s => s.Capacity == 64),
                Price = 349M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Gold"),
                Storage = _context.Storages.Single(s => s.Capacity == 32),
                Price = 319M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Gold"),
                Storage = _context.Storages.Single(s => s.Capacity == 64),
                Price = 369M
              }
            }
          },
          new Product
          {
            Name = "Globex Scorpio",
            Slug = "globex-scorpio",
            Thumbnail = "/assets/images/thumbnail.jpeg",
            ShortDescription = "Globex Scorpio Windows smartphone with true edge to edge display",
            Description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora ad cum laudantium, omnis fugit amet iure animi corporis labore repellat magnam perspiciatis explicabo maiores fuga provident a obcaecati tenetur nostrum, quidem quod dignissimos, voluptatem quasi? Nisi quaerat, fugit voluptas ducimus facilis impedit quod dicta, laborum sint iure nihil veniam aspernatur delectus officia culpa, at cupiditate? Totam minima ut deleniti laboriosam dolores cumque in, nesciunt optio! Quod recusandae voluptate facere pariatur soluta vel corrupti tenetur aut maiores, cumque mollitia fugiat laudantium error odit voluptas nobis laboriosam quo, rem deleniti? Iste quidem amet perferendis sed iusto tempora modi illo tempore quibusdam laborum? Dicta aliquam libero, facere, maxime corporis qui officiis explicabo aspernatur non consequatur mollitia iure magnam odit enim. Eligendi suscipit, optio officiis repellat eos quis iure? Omnis, error aliquid quibusdam iste amet nihil nisi cumque magni sequi enim illo autem nesciunt optio accusantium animi commodi tenetur neque eum vitae est.",
            ScreenSize = 7M,
            TalkTime = 6M,
            StandbyTime = 30M,
            Brand = _context.Brands.Single(b => b.Name == "Globex"),
            OS = _context.OS.Single(os => os.Name == "Windows"),
            Images = new List<Image>
            {
              new Image { Url = "/assets/images/gallery1.jpeg" },
              new Image { Url = "/assets/images/gallery2.jpeg" },
              new Image { Url = "/assets/images/gallery3.jpeg" },
              new Image { Url = "/assets/images/gallery4.jpeg" },
              new Image { Url = "/assets/images/gallery5.jpeg" },
              new Image { Url = "/assets/images/gallery6.jpeg" }
            },
            ProductFeatures = new List<ProductFeature>
            {
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "3G")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "Bluetooth")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "WiFi")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "GPS")
              }
            },
            ProductVariants = new List<ProductVariant>
            {
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "White"),
                Storage = _context.Storages.Single(s => s.Capacity == 8),
                Price = 149M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "White"),
                Storage = _context.Storages.Single(s => s.Capacity == 16),
                Price = 169M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Silver"),
                Storage = _context.Storages.Single(s => s.Capacity == 8),
                Price = 159M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Silver"),
                Storage = _context.Storages.Single(s => s.Capacity == 16),
                Price = 179M
              }
            }
          },
          new Product
          {
            Name = "Soylent MegaFone",
            Slug = "soylent-megafone",
            Thumbnail = "/assets/images/thumbnail.jpeg",
            ShortDescription = "Soylent MegaFone budget Android smartphone with true edge to edge display",
            Description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora ad cum laudantium, omnis fugit amet iure animi corporis labore repellat magnam perspiciatis explicabo maiores fuga provident a obcaecati tenetur nostrum, quidem quod dignissimos, voluptatem quasi? Nisi quaerat, fugit voluptas ducimus facilis impedit quod dicta, laborum sint iure nihil veniam aspernatur delectus officia culpa, at cupiditate? Totam minima ut deleniti laboriosam dolores cumque in, nesciunt optio! Quod recusandae voluptate facere pariatur soluta vel corrupti tenetur aut maiores, cumque mollitia fugiat laudantium error odit voluptas nobis laboriosam quo, rem deleniti? Iste quidem amet perferendis sed iusto tempora modi illo tempore quibusdam laborum? Dicta aliquam libero, facere, maxime corporis qui officiis explicabo aspernatur non consequatur mollitia iure magnam odit enim. Eligendi suscipit, optio officiis repellat eos quis iure? Omnis, error aliquid quibusdam iste amet nihil nisi cumque magni sequi enim illo autem nesciunt optio accusantium animi commodi tenetur neque eum vitae est.",
            ScreenSize = 5M,
            TalkTime = 10M,
            StandbyTime = 48M,
            Brand = _context.Brands.Single(b => b.Name == "Soylent"),
            OS = _context.OS.Single(os => os.Name == "Android"),
            Images = new List<Image>
            {
              new Image { Url = "/assets/images/gallery1.jpeg" },
              new Image { Url = "/assets/images/gallery2.jpeg" },
              new Image { Url = "/assets/images/gallery3.jpeg" },
              new Image { Url = "/assets/images/gallery4.jpeg" },
              new Image { Url = "/assets/images/gallery5.jpeg" },
              new Image { Url = "/assets/images/gallery6.jpeg" }
            },
            ProductFeatures = new List<ProductFeature>
            {
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "3G")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "Bluetooth")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "WiFi")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "GPS")
              }
            },
            ProductVariants = new List<ProductVariant>
            {
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Grey"),
                Storage = _context.Storages.Single(s => s.Capacity == 4),
                Price = 99M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Grey"),
                Storage = _context.Storages.Single(s => s.Capacity == 8),
                Price = 119M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Grey"),
                Storage = _context.Storages.Single(s => s.Capacity == 16),
                Price = 139M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Spacegrey"),
                Storage = _context.Storages.Single(s => s.Capacity == 4),
                Price = 99M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Spacegrey"),
                Storage = _context.Storages.Single(s => s.Capacity == 8),
                Price = 119M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Spacegrey"),
                Storage = _context.Storages.Single(s => s.Capacity == 16),
                Price = 139M
              }
            }
          },
          new Product
          {
            Name = "Initech Silicon 5",
            Slug = "initech-silicon-5",
            Thumbnail = "/assets/images/thumbnail.jpeg",
            ShortDescription = "Initech Silicon 5 premium iOS smartphone with true edge to edge display",
            Description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora ad cum laudantium, omnis fugit amet iure animi corporis labore repellat magnam perspiciatis explicabo maiores fuga provident a obcaecati tenetur nostrum, quidem quod dignissimos, voluptatem quasi? Nisi quaerat, fugit voluptas ducimus facilis impedit quod dicta, laborum sint iure nihil veniam aspernatur delectus officia culpa, at cupiditate? Totam minima ut deleniti laboriosam dolores cumque in, nesciunt optio! Quod recusandae voluptate facere pariatur soluta vel corrupti tenetur aut maiores, cumque mollitia fugiat laudantium error odit voluptas nobis laboriosam quo, rem deleniti? Iste quidem amet perferendis sed iusto tempora modi illo tempore quibusdam laborum? Dicta aliquam libero, facere, maxime corporis qui officiis explicabo aspernatur non consequatur mollitia iure magnam odit enim. Eligendi suscipit, optio officiis repellat eos quis iure? Omnis, error aliquid quibusdam iste amet nihil nisi cumque magni sequi enim illo autem nesciunt optio accusantium animi commodi tenetur neque eum vitae est.",
            ScreenSize = 4.7M,
            TalkTime = 8M,
            StandbyTime = 36M,
            Brand = _context.Brands.Single(b => b.Name == "Initech"),
            OS = _context.OS.Single(os => os.Name == "iOS"),
            Images = new List<Image>
            {
              new Image { Url = "/assets/images/gallery1.jpeg" },
              new Image { Url = "/assets/images/gallery2.jpeg" },
              new Image { Url = "/assets/images/gallery3.jpeg" },
              new Image { Url = "/assets/images/gallery4.jpeg" },
              new Image { Url = "/assets/images/gallery5.jpeg" },
              new Image { Url = "/assets/images/gallery6.jpeg" }
            },
            ProductFeatures = new List<ProductFeature>
            {
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "3G")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "4G")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "Bluetooth")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "WiFi")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "GPS")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "Fast charge")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "NFC")
              }
            },
            ProductVariants = new List<ProductVariant>
            {
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Black"),
                Storage = _context.Storages.Single(s => s.Capacity == 32),
                Price = 599M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Black"),
                Storage = _context.Storages.Single(s => s.Capacity == 64),
                Price = 699M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Black"),
                Storage = _context.Storages.Single(s => s.Capacity == 128),
                Price = 799M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Black"),
                Storage = _context.Storages.Single(s => s.Capacity == 256),
                Price = 899M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Silver"),
                Storage = _context.Storages.Single(s => s.Capacity == 32),
                Price = 599M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Silver"),
                Storage = _context.Storages.Single(s => s.Capacity == 64),
                Price = 699M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Silver"),
                Storage = _context.Storages.Single(s => s.Capacity == 128),
                Price = 799M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Silver"),
                Storage = _context.Storages.Single(s => s.Capacity == 256),
                Price = 899M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Grey"),
                Storage = _context.Storages.Single(s => s.Capacity == 32),
                Price = 599M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Grey"),
                Storage = _context.Storages.Single(s => s.Capacity == 64),
                Price = 699M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Grey"),
                Storage = _context.Storages.Single(s => s.Capacity == 128),
                Price = 799M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Grey"),
                Storage = _context.Storages.Single(s => s.Capacity == 256),
                Price = 899M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Spacegrey"),
                Storage = _context.Storages.Single(s => s.Capacity == 32),
                Price = 699M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Spacegrey"),
                Storage = _context.Storages.Single(s => s.Capacity == 64),
                Price = 799M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Spacegrey"),
                Storage = _context.Storages.Single(s => s.Capacity == 128),
                Price = 899M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Spacegrey"),
                Storage = _context.Storages.Single(s => s.Capacity == 256),
                Price = 999M
              }
            }
          },
          new Product
          {
            Name = "Umbrella T3",
            Slug = "umbrella-t3",
            Thumbnail = "/assets/images/thumbnail.jpeg",
            ShortDescription = "Umbrella T3 premium Android smartphone with true edge to edge display",
            Description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora ad cum laudantium, omnis fugit amet iure animi corporis labore repellat magnam perspiciatis explicabo maiores fuga provident a obcaecati tenetur nostrum, quidem quod dignissimos, voluptatem quasi? Nisi quaerat, fugit voluptas ducimus facilis impedit quod dicta, laborum sint iure nihil veniam aspernatur delectus officia culpa, at cupiditate? Totam minima ut deleniti laboriosam dolores cumque in, nesciunt optio! Quod recusandae voluptate facere pariatur soluta vel corrupti tenetur aut maiores, cumque mollitia fugiat laudantium error odit voluptas nobis laboriosam quo, rem deleniti? Iste quidem amet perferendis sed iusto tempora modi illo tempore quibusdam laborum? Dicta aliquam libero, facere, maxime corporis qui officiis explicabo aspernatur non consequatur mollitia iure magnam odit enim. Eligendi suscipit, optio officiis repellat eos quis iure? Omnis, error aliquid quibusdam iste amet nihil nisi cumque magni sequi enim illo autem nesciunt optio accusantium animi commodi tenetur neque eum vitae est.",
            ScreenSize = 5.5M,
            TalkTime = 8M,
            StandbyTime = 36M,
            Brand = _context.Brands.Single(b => b.Name == "Umbrella"),
            OS = _context.OS.Single(os => os.Name == "Android"),
            Images = new List<Image>
            {
              new Image { Url = "/assets/images/gallery1.jpeg" },
              new Image { Url = "/assets/images/gallery2.jpeg" },
              new Image { Url = "/assets/images/gallery3.jpeg" },
              new Image { Url = "/assets/images/gallery4.jpeg" },
              new Image { Url = "/assets/images/gallery5.jpeg" },
              new Image { Url = "/assets/images/gallery6.jpeg" }
            },
            ProductFeatures = new List<ProductFeature>
            {
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "3G")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "4G")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "Bluetooth")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "WiFi")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "GPS")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "Fast charge")
              },
              new ProductFeature
              {
                Feature = _context.Features.Single(f => f.Name == "NFC")
              }
            },
            ProductVariants = new List<ProductVariant>
            {
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Black"),
                Storage = _context.Storages.Single(s => s.Capacity == 16),
                Price = 499M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Black"),
                Storage = _context.Storages.Single(s => s.Capacity == 32),
                Price = 599M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Black"),
                Storage = _context.Storages.Single(s => s.Capacity == 64),
                Price = 699M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Silver"),
                Storage = _context.Storages.Single(s => s.Capacity == 16),
                Price = 499M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Silver"),
                Storage = _context.Storages.Single(s => s.Capacity == 32),
                Price = 599M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Silver"),
                Storage = _context.Storages.Single(s => s.Capacity == 64),
                Price = 699M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Grey"),
                Storage = _context.Storages.Single(s => s.Capacity == 16),
                Price = 499M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Grey"),
                Storage = _context.Storages.Single(s => s.Capacity == 32),
                Price = 599M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Grey"),
                Storage = _context.Storages.Single(s => s.Capacity == 64),
                Price = 699M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Spacegrey"),
                Storage = _context.Storages.Single(s => s.Capacity == 16),
                Price = 499M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Spacegrey"),
                Storage = _context.Storages.Single(s => s.Capacity == 32),
                Price = 599M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Spacegrey"),
                Storage = _context.Storages.Single(s => s.Capacity == 64),
                Price = 699M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Red"),
                Storage = _context.Storages.Single(s => s.Capacity == 16),
                Price = 499M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Red"),
                Storage = _context.Storages.Single(s => s.Capacity == 32),
                Price = 599M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Red"),
                Storage = _context.Storages.Single(s => s.Capacity == 64),
                Price = 699M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Pink"),
                Storage = _context.Storages.Single(s => s.Capacity == 16),
                Price = 499M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Pink"),
                Storage = _context.Storages.Single(s => s.Capacity == 32),
                Price = 599M
              },
              new ProductVariant
              {
                Colour = _context.Colours.Single(c => c.Name == "Pink"),
                Storage = _context.Storages.Single(s => s.Capacity == 64),
                Price = 699M
              }
            }
          }
        };

                _context.Products.AddRange(products);
                await _context.SaveChangesAsync();
            }
        }
    }
}
