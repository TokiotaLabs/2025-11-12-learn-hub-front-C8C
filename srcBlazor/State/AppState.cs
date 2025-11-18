using LearnHub.Models;

namespace LearnHub.State;

/// <summary>
/// Application state management service (Single Responsibility Principle)
/// Provides centralized state management with event notifications
/// </summary>
public class AppState
{
    private Student? _currentStudent;
    private string? _authToken;

    public Student? CurrentStudent
    {
        get => _currentStudent;
        set
        {
            _currentStudent = value;
            NotifyStateChanged();
        }
    }

    public string? AuthToken
    {
        get => _authToken;
        set
        {
            _authToken = value;
            NotifyStateChanged();
        }
    }

    public bool IsAuthenticated => !string.IsNullOrEmpty(_authToken);

    public event Action? OnChange;

    private void NotifyStateChanged() => OnChange?.Invoke();
}
