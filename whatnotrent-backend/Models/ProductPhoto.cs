using System.ComponentModel.DataAnnotations;

namespace el_proyecte_grande.Models;

public class ProductPhoto
{
    [Key]
    public int PhotoId { get; set; }
    public int ProductId { get; set; }
    public string? PhotoUrl { get; set; }
}