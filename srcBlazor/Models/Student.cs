namespace LearnHub.Models;

/// <summary>
/// Represents a student in the learning platform
/// </summary>
public class Student
{
    public string Id { get; set; } = string.Empty;
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string DateOfBirth { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}
