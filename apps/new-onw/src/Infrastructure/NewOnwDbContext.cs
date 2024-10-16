using Microsoft.EntityFrameworkCore;

namespace NewOnw.Infrastructure;

public class NewOnwDbContext : DbContext
{
    public NewOnwDbContext(DbContextOptions<NewOnwDbContext> options)
        : base(options) { }
}
