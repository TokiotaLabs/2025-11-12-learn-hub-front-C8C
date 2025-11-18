# LearnHub - Blazor Server Application

## Overview

This is the Blazor Server implementation of the LearnHub learning platform, migrated from the original React/TypeScript application. The project follows clean architecture principles, SOLID design principles, and .NET 8 best practices.

## Architecture

### Project Structure

```
srcBlazor/
├── Components/
│   ├── Layout/          # Layout components
│   ├── Pages/           # Page components (routable)
│   └── Shared/          # Reusable shared components
├── Models/              # Data models/DTOs
├── Services/
│   ├── Interfaces/      # Service interfaces (DIP)
│   └── Implementations/ # Service implementations
├── State/               # Application state management
└── wwwroot/             # Static files
```

### SOLID Principles Implementation

1. **Single Responsibility Principle (SRP)**
   - Each service handles only one aspect of the application
   - `CourseService` - Course-related operations only
   - `StudentService` - Student-related operations only
   - `ApiClient` - HTTP communication only

2. **Open/Closed Principle (OCP)**
   - Services are open for extension through interfaces
   - New features can be added without modifying existing code

3. **Liskov Substitution Principle (LSP)**
   - All service implementations can replace their interfaces
   - Consistent behavior across implementations

4. **Interface Segregation Principle (ISP)**
   - Focused interfaces: `ICourseService`, `IStudentService`, `IApiClient`
   - Clients depend only on methods they use

5. **Dependency Inversion Principle (DIP)**
   - High-level modules depend on abstractions (interfaces)
   - Services inject `IApiClient` instead of concrete `ApiClient`
   - Configured via dependency injection in `Program.cs`

## Technology Stack

- **.NET 8** - Target framework
- **Blazor Server** - UI framework with server-side rendering
- **ASP.NET Core** - Web framework
- **Tailwind CSS** - Utility-first CSS framework

## Features

### Pages
- **Home** - Landing page with popular courses and testimonials
- **Courses** - Course catalog with search functionality
- **Course Detail** - Detailed course information
- **Course Manager** - Create/Edit courses
- **Sign Up** - Student registration
- **Profile** - User profile and enrolled courses

### Components
- **Header** - Navigation header with auth buttons
- **Footer** - Site footer with newsletter subscription
- **Navigation** - Main navigation menu
- **CourseCard** - Course display card with actions
- **SearchBar** - Course search functionality
- **Modal** - Reusable modal dialog
- **Testimonial** - User testimonial display
- **NewsletterForm** - Newsletter subscription form

### Services
- **CourseService** - CRUD operations for courses
- **StudentService** - Student management
- **ApiClient** - Generic HTTP client with error handling
- **AppState** - Centralized application state management

## Configuration

### API Settings

Configure the API base URL in `appsettings.json`:

```json
{
  "ApiSettings": {
    "BaseUrl": "http://localhost:5039/api/"
  }
}
```

### Dependency Injection

Services are configured in `Program.cs`:

```csharp
// HTTP Client with configuration
builder.Services.AddHttpClient<IApiClient, ApiClient>(client =>
{
    client.BaseAddress = new Uri(apiBaseUrl);
    client.Timeout = TimeSpan.FromSeconds(10);
});

// Application services
builder.Services.AddScoped<ICourseService, CourseService>();
builder.Services.AddScoped<IStudentService, StudentService>();

// Application state
builder.Services.AddSingleton<AppState>();
```

## Getting Started

### Prerequisites
- .NET 8 SDK or later
- A running instance of the LearnHub API

### Running the Application

1. Navigate to the srcBlazor directory:
   ```bash
   cd srcBlazor
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Build the project:
   ```bash
   dotnet build
   ```

4. Run the application:
   ```bash
   dotnet run
   ```

5. Open your browser and navigate to:
   ```
   https://localhost:5001
   ```
   or
   ```
   http://localhost:5000
   ```

## Development

### Adding a New Service

1. Create an interface in `Services/Interfaces/`:
   ```csharp
   public interface IMyService
   {
       Task<MyData> GetDataAsync();
   }
   ```

2. Create implementation in `Services/Implementations/`:
   ```csharp
   public class MyService : IMyService
   {
       private readonly IApiClient _apiClient;
       
       public MyService(IApiClient apiClient)
       {
           _apiClient = apiClient;
       }
       
       public async Task<MyData> GetDataAsync()
       {
           return await _apiClient.GetAsync<MyData>("endpoint");
       }
   }
   ```

3. Register in `Program.cs`:
   ```csharp
   builder.Services.AddScoped<IMyService, MyService>();
   ```

### Creating a New Component

1. Create a `.razor` file in `Components/Shared/` or `Components/Pages/`
2. Add parameters using `[Parameter]` attribute
3. Use dependency injection with `@inject` directive
4. Apply `@rendermode InteractiveServer` for interactive components

## Best Practices

1. **Separation of Concerns**
   - Keep business logic in services
   - Keep UI logic in components
   - Use models for data transfer

2. **Error Handling**
   - Services catch and log errors
   - UI displays user-friendly messages
   - Use try-catch blocks appropriately

3. **Async/Await**
   - All service methods are async
   - Use `Task` and `Task<T>` return types
   - Await async operations properly

4. **Naming Conventions**
   - Services: `ServiceNameService`
   - Interfaces: `IServiceName`
   - Components: PascalCase
   - Private fields: camelCase with underscore prefix

## Testing

To run tests (when available):
```bash
dotnet test
```

## Build for Production

```bash
dotnet publish -c Release -o publish
```

## Migration Notes

This project is a complete migration from the original React/TypeScript application to Blazor Server. Key differences:

- **State Management**: Changed from React Context to Blazor AppState service
- **Routing**: Changed from React Router to Blazor routing
- **Styling**: Maintained Tailwind CSS using CDN
- **Components**: All functional React components migrated to Razor components
- **API Integration**: Axios replaced with HttpClient through ApiClient service

## Maintainability

The application follows these maintainability principles:

- **Clear separation of concerns** - Easy to locate and modify specific functionality
- **Dependency injection** - Easy to mock and test services
- **Interface-based design** - Easy to swap implementations
- **Consistent patterns** - Easy to understand and extend
- **Comprehensive documentation** - Easy to onboard new developers

## License

© 2024 LearnHub. All rights reserved.
