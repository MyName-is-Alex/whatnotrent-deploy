using el_proyecte_grande.Data;
using el_proyecte_grande.Models;

namespace el_proyecte_grande.Daos.Implementation;

public class PhotoDaoDatabase
{
    private ApplicationDbContext _context;

    public PhotoDaoDatabase(ApplicationDbContext context)
    {
        _context = context;
    }

    public void Add(ProductPhoto item)
    {
        _context.ProductPhotos.Add(item);
        _context.SaveChanges();
    }

    public void Remove(int id)
    {
        _context.ProductPhotos.Remove(_context.ProductPhotos.Single(x => x.PhotoId == id));
    }
}