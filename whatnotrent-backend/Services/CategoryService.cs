using el_proyecte_grande.Daos;
using el_proyecte_grande.Daos.Implementation;
using el_proyecte_grande.Models;
using el_proyecte_grande.Utils;

namespace el_proyecte_grande.Services;

public class CategoryService
{
    private readonly IDao<Category> _categoryDao;

    public CategoryService(IDao<Category> categoryDao)
    {
        _categoryDao = categoryDao;
    }
    
    public IEnumerable<Category> GetAllCategories()
    {
        var categories = _categoryDao.GetAll();
        return categories; 
    }

    public Category GetCategoryById(int id)
    {
        return _categoryDao.Get(id);
    }
}