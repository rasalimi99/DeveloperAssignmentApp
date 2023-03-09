using DeveloperAssignment.Application;
using DeveloperAssignment.Infrastructure;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddControllersWithViews(options =>
{
    options.Filters.Add<ParseBadRequest>();
}).ConfigureApiBehaviorOptions(BadRequestsBehavior.Parse);

builder.Services.AddTransient<IGeneral, General>();
builder.Services.AddTransient<IEntities, Entities>();


builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {

            //you can configure your custom policy
            builder.AllowAnyOrigin()
                                .AllowAnyHeader()
                                .AllowAnyMethod().WithExposedHeaders(new string[] { "totalAmountOfRecords" });
        });
});


builder.Services.AddAutoMapper(Assembly.Load("DeveloperAssignment.Infrastructure"));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
