using LearnHub.Models;

namespace LearnHub.Services.Interfaces;

/// <summary>
/// Interface for course-related operations (Interface Segregation Principle)
/// </summary>
public interface ICourseService
{
    Task<IEnumerable<Course>> GetCoursesAsync();
    Task<Course?> GetCourseByIdAsync(string id);
    Task<Course> CreateCourseAsync(Course course);
    Task<Course> UpdateCourseAsync(string id, Course course);
    Task DeleteCourseAsync(string id);
}
