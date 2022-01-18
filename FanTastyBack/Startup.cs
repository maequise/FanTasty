using FanTastyBack.Config;
using FanTastyBack.Repositories;
using FanTastyBack.Repositories.Interfaces;
using FanTastyBack.Services;
using FanTastyBack.Services.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FanTastyBack
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            // Configuration DB
            services.Configure<FantastyDatabaseSettings>(Configuration.GetSection(nameof(FantastyDatabaseSettings)));
            services.AddSingleton<IFantastyDatabaseSettings>(sp => sp.GetRequiredService<IOptions<FantastyDatabaseSettings>>().Value);

            // Repositories
            services.AddSingleton<IRecetteRepository, RecetteRepository>();
            services.AddSingleton<IIngredientRepository, IngredientRepository>();
            services.AddSingleton<IUtilisateurRepository, UtilisateurRepository>();

            // Services
            services.AddSingleton<RecetteService, RecetteService>();
            services.AddSingleton<IngredientService, IngredientService>();
            services.AddSingleton<UtilisateurService, UtilisateurService>();

            // Controllers
            services.AddControllers();

            // Problèmes de sécurité
            services.AddCors(o => o.AddPolicy("MyPolicy", builder => { builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader(); }));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "FanTastyBack", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
            app.UseCors("MyPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapFallback("/", async context =>
                 {
                     await context.Response.WriteAsync("Hello World!");
                 });
            });
        }
    }
}
