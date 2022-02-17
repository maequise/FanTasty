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
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MongoDB.Bson.Serialization.Conventions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FanTastyBack
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
   
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            // Configuration DB
            services.Configure<FantastyDatabaseSettings>(Configuration.GetSection(nameof(FantastyDatabaseSettings)));
            services.AddSingleton<IFantastyDatabaseSettings>(sp => sp.GetRequiredService<IOptions<FantastyDatabaseSettings>>().Value);
            
            // Mapping des attributs insensible à la case
            var pack = new ConventionPack();
            pack.Add(new CamelCaseElementNameConvention());
            ConventionRegistry.Register("Camel case convention", pack, t => true);

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
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Serving static files
            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
                RequestPath = new PathString("/Resources")
            });


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
