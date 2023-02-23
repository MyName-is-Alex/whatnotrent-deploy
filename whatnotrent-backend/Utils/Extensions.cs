using el_proyecte_grande.Data;
using el_proyecte_grande.Models;
using el_proyecte_grande.Services;
using Microsoft.EntityFrameworkCore;

namespace el_proyecte_grande.Utils;

public static class Extensions
{
    public static IQueryable<Product> GetCompleteProducts(this ApplicationDbContext context)
    {
        return context.Product
            .Include(c => c.User)
            .Include(d => d.Category)
            .Include(e => e.Photos);
    }
    
    public static async Task<byte[]> GetBytes(this IFormFile formFile)
    {
        await using var memoryStream = new MemoryStream();
        await formFile.CopyToAsync(memoryStream);
        return memoryStream.ToArray();
    }
}