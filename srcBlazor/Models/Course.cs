namespace LearnHub.Models;

/// <summary>
/// Represents a course in the learning platform
/// </summary>
public class Course
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string StartDate { get; set; } = string.Empty;
    public string EndDate { get; set; } = string.Empty;
    public int Duration { get; set; }
    public decimal Price { get; set; }
    public string Prerequisites { get; set; } = string.Empty;
    public string InstructorId { get; set; } = string.Empty;
    public Instructor Instructor { get; set; } = new();
    public string Modality { get; set; } = string.Empty;
    public string IncludedMaterials { get; set; } = string.Empty;
    public string Certification { get; set; } = string.Empty;
    public int AvailableSeats { get; set; }
    public string Location { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public List<string> Enrollments { get; set; } = new();
}
