using Microsoft.EntityFrameworkCore;

namespace Fd.Infrastructure;

public class FdDbContext : DbContext
{
    public FdDbContext(DbContextOptions<FdDbContext> options)
        : base(options) { }
}
