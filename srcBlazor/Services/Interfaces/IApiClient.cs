namespace LearnHub.Services.Interfaces;

/// <summary>
/// Generic interface for HTTP API operations (Dependency Inversion Principle)
/// </summary>
public interface IApiClient
{
    Task<T?> GetAsync<T>(string endpoint);
    Task<T?> PostAsync<T>(string endpoint, object data);
    Task<T?> PutAsync<T>(string endpoint, object data);
    Task DeleteAsync(string endpoint);
}
