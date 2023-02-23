namespace el_proyecte_grande.Models;

public class TaskResponse
{
    public string Message { get; set; }
    public bool IsSuccess { get; set; }
    public string? ReturnedElement { get; set; }
    public IEnumerable<string>? Errors { get; set; }
}