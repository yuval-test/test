using Microsoft.EntityFrameworkCore;

namespace NyService.Infrastructure;

public class NyServiceDbContext : DbContext
{
    public NyServiceDbContext(DbContextOptions<NyServiceDbContext> options)
        : base(options) { }
}
