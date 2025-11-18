namespace LearnHub.Models;

/// <summary>
/// Represents an instructor in the learning platform
/// </summary>
public class Instructor
{
    public string? Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Biography { get; set; }
    public List<Course>? Courses { get; set; }
}
