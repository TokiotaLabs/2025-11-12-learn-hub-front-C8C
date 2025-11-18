using LearnHub.Models;
using LearnHub.Services.Interfaces;

namespace LearnHub.Services.Implementations;

/// <summary>
/// Course service implementation (Single Responsibility Principle - handles only course business logic)
/// Depends on abstraction (IApiClient) rather than concrete implementation (Dependency Inversion Principle)
/// </summary>
public class CourseService : ICourseService
{
    private readonly IApiClient _apiClient;
    private readonly ILogger<CourseService> _logger;
    private const string CoursesEndpoint = "course";

    public CourseService(IApiClient apiClient, ILogger<CourseService> logger)
    {
        _apiClient = apiClient;
        _logger = logger;
    }

    public async Task<IEnumerable<Course>> GetCoursesAsync()
    {
        try
        {
            var courses = await _apiClient.GetAsync<IEnumerable<Course>>(CoursesEndpoint);
            return courses ?? new List<Course>();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error al obtener los cursos");
            return new List<Course>();
        }
    }

    public async Task<Course?> GetCourseByIdAsync(string id)
    {
        try
        {
            return await _apiClient.GetAsync<Course>($"{CoursesEndpoint}/{id}");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error al obtener el curso con ID {CourseId}", id);
            return null;
        }
    }

    public async Task<Course> CreateCourseAsync(Course course)
    {
        try
        {
            var createdCourse = await _apiClient.PostAsync<Course>(CoursesEndpoint, course);
            return createdCourse ?? throw new InvalidOperationException("No se pudo crear el curso");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error al crear el curso");
            throw;
        }
    }

    public async Task<Course> UpdateCourseAsync(string id, Course course)
    {
        try
        {
            var updatedCourse = await _apiClient.PutAsync<Course>($"{CoursesEndpoint}/{id}", course);
            return updatedCourse ?? throw new InvalidOperationException("No se pudo actualizar el curso");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error al actualizar el curso con ID {CourseId}", id);
            throw;
        }
    }

    public async Task DeleteCourseAsync(string id)
    {
        try
        {
            await _apiClient.DeleteAsync($"{CoursesEndpoint}/{id}");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error al eliminar el curso con ID {CourseId}", id);
            throw;
        }
    }
}
