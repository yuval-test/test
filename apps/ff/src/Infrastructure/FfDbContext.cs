using Microsoft.EntityFrameworkCore;

namespace Ff.Infrastructure;

public class FfDbContext : DbContext
{
    public FfDbContext(DbContextOptions<FfDbContext> options)
        : base(options) { }
}
