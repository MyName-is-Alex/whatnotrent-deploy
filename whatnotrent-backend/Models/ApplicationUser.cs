using Microsoft.AspNetCore.Identity;

namespace el_proyecte_grande.Models;

public class ApplicationUser : IdentityUser
{
    public string? PhotoUrl { get; set; }
}