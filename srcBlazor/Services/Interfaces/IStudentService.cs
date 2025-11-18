using LearnHub.Models;

namespace LearnHub.Services.Interfaces;

/// <summary>
/// Interface for student-related operations (Interface Segregation Principle)
/// </summary>
public interface IStudentService
{
    Task<Student?> GetStudentAsync(string id);
    Task<Student> CreateStudentAsync(Student student);
    Task<Student> UpdateStudentAsync(string id, Student student);
}
