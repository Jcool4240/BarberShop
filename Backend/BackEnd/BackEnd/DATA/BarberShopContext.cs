using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.DATA
{
    public class BarberShopContext : IdentityDbContext<CustomUser>
    {
        public BarberShopContext(DbContextOptions<BarberShopContext> opt) : base(opt)
        {
            
        }
        #region DbSet
        public DbSet<LichHen>? LichHens { get; set; }
        public DbSet<DichVu>? DichVus { get; set; }
        public DbSet<LoaiDV>? LoaiDVs { get; set; }
        public DbSet<SanPham>? SanPhams { get; set; }
        public DbSet<LoaiSP>? LoaiSPs { get; set; }
        public DbSet<CuaHang>? CuaHangs { get; set; }
        public DbSet<DonHang>? DonHangs { get; set; }
        public DbSet<HoaDon>? HoaDons { get; set; }
        public DbSet<ThoCatToc>? ThoCatTocs { get; set; }
        public DbSet<ChiNhanh>? ChiNhanhs { get; set; }

        public DbSet<ChiTietDonHang>? ChiTietDonHangs { get; set; }
        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<DonHang>(e =>
            {
                e.ToTable("DonHang");
                e.HasKey(dh => dh.MaDH);
                e.Property(dh => dh.NgayDat).HasDefaultValueSql("getutcdate()");
            });

            modelBuilder.Entity<ChiTietDonHang>(entity =>
            {
                entity.ToTable("ChiTietDonHang");
                entity.HasKey(e => new { e.MaDH, e.MaSP });

                entity.HasOne(e => e.DonHang)
                    .WithMany(e => e.ChiTietDonHangs)
                    .HasForeignKey(e => e.MaDH)
                    .HasConstraintName("FK_DonHangCT_DonHang");

                entity.HasOne(e => e.SanPham)
                    .WithMany(e => e.ChiTietDonHangs)
                    .HasForeignKey(e => e.MaSP)
                    .HasConstraintName("FK_DonHangCT_SanPham");

            });

            modelBuilder.Entity<HoaDon>(e =>
            {
                e.ToTable("HoaDon");
                e.HasKey(hd => hd.MAHD);
                e.Property(hd => hd.ThoiGianHD).HasDefaultValueSql("getutcdate()");
            });

            modelBuilder.Entity<ChiTietHoaDon>(entity =>
            {
                entity.ToTable("ChiTietHoaDon");
                entity.HasKey(e => new { e.MaHD, e.MaDV });

                entity.HasOne(e => e.HoaDon)
                    .WithMany(e => e.ChiTietHoaDons)
                    .HasForeignKey(e => e.MaHD)
                    .HasConstraintName("FK_HoaDonCT_HoaDon");

                entity.HasOne(e => e.DichVu)
                    .WithMany(e => e.ChiTietHoaDons)
                    .HasForeignKey(e => e.MaDV)
                    .HasConstraintName("FK_HoaDonCT_DichVu");

            });

            modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Name = "User",
                NormalizedName = "USER",
                Id = Guid.NewGuid().ToString(),
                ConcurrencyStamp = Guid.NewGuid().ToString(),

            });

            modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Name = "Admin",
                NormalizedName = "ADMIN",
                Id = Guid.NewGuid().ToString(),
                ConcurrencyStamp = Guid.NewGuid().ToString(),

            });

            modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Name = "Owner",
                NormalizedName = "OWNER",
                Id = Guid.NewGuid().ToString(),
                ConcurrencyStamp = Guid.NewGuid().ToString(),

            });

            modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Name = "Manager",
                NormalizedName = "MANAGER",
                Id = Guid.NewGuid().ToString(),
                ConcurrencyStamp = Guid.NewGuid().ToString(),

            });

            modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Name = "Baber",
                NormalizedName = "BABER",
                Id = Guid.NewGuid().ToString(),
                ConcurrencyStamp = Guid.NewGuid().ToString(),

            });
        }
    }
}
