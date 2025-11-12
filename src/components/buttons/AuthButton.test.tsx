import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AuthButton } from './AuthButton';
import { BrowserRouter } from 'react-router-dom';

describe('AuthButton', () => {
  test('renders the button with label', () => {
    render(
      <BrowserRouter>
        <AuthButton label="Login" variant="solid" url="/login" iconUrl="" />
      </BrowserRouter>
    );
    const buttonElement = screen.getByText(/Login/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders the button with outline variant', () => {
    render(
      <BrowserRouter>
        <AuthButton
          label="Sign Up"
          variant="outline"
          url="/signup"
          iconUrl=""
        />
      </BrowserRouter>
    );
    const buttonElement = screen.getByText(/Sign Up/i);
    expect(buttonElement).toHaveClass('text-indigo-500');
  });

  test('renders the button with icon', () => {
    render(
      <BrowserRouter>
        <AuthButton
          label="Login"
          variant="solid"
          iconUrl="/icon.png"
          url="/login"
        />
      </BrowserRouter>
    );

    const iconElement = screen.getByAltText('icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('renders the button with correct URL', () => {
    render(
      <BrowserRouter>
        <AuthButton label="Login" variant="solid" url="/login" iconUrl="" />
      </BrowserRouter>
    );
    const linkElement = screen.getByRole('link', { name: /Login/i });
    expect(linkElement).toHaveAttribute('href', '/login');
  });
});
