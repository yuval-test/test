using Microsoft.EntityFrameworkCore;

namespace Ds.Infrastructure;

public class DsDbContext : DbContext
{
    public DsDbContext(DbContextOptions<DsDbContext> options)
        : base(options) { }
}
