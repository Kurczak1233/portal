using IBigDataPortal.Database;
using IBigDataPortal.Domain.UsersAggregate;
using IBigDataPortal.Infrastructure;
using IBigDataPortal.Services.UsersService.Queries;
using Microsoft.EntityFrameworkCore;

namespace IBigDataPortal;

public static class DependencyInjection
{
    public static void AddDependencies(this IServiceCollection services, string connectionString)
    {
        services.AddDbContext<ApplicationDbContext>(opt =>
            opt.UseSqlServer(connectionString,   x => x.MigrationsAssembly("IBigDataPortal.API.Database")));
        services.AddScoped<ISqlConnectionService, SqlConnectionService>(_ => new SqlConnectionService(connectionString));
        services.AddTransient<IUsersServiceQueries, UsersServiceQueries>();
        
    }
}