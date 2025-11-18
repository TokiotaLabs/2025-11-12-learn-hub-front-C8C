using LearnHub.Models;
using LearnHub.Services.Interfaces;

namespace LearnHub.Services.Implementations;

/// <summary>
/// Student service implementation (Single Responsibility Principle)
/// Depends on abstraction (IApiClient) rather than concrete implementation (Dependency Inversion Principle)
/// </summary>
public class StudentService : IStudentService
{
    private readonly IApiClient _apiClient;
    private readonly ILogger<StudentService> _logger;
    private const string StudentsEndpoint = "students";

    public StudentService(IApiClient apiClient, ILogger<StudentService> logger)
    {
        _apiClient = apiClient;
        _logger = logger;
    }

    public async Task<Student?> GetStudentAsync(string id)
    {
        try
        {
            return await _apiClient.GetAsync<Student>($"{StudentsEndpoint}/{id}");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error al obtener el estudiante con ID {StudentId}", id);
            return null;
        }
    }

    public async Task<Student> CreateStudentAsync(Student student)
    {
        try
        {
            var createdStudent = await _apiClient.PostAsync<Student>(StudentsEndpoint, student);
            return createdStudent ?? throw new InvalidOperationException("No se pudo crear el estudiante");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error al crear el estudiante");
            throw;
        }
    }

    public async Task<Student> UpdateStudentAsync(string id, Student student)
    {
        try
        {
            var updatedStudent = await _apiClient.PutAsync<Student>($"{StudentsEndpoint}/{id}", student);
            return updatedStudent ?? throw new InvalidOperationException("No se pudo actualizar el estudiante");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error al actualizar el estudiante con ID {StudentId}", id);
            throw;
        }
    }
}
