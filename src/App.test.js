// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AmmCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AmmCore/i);
    expect(titleElement).toBeInTheDocument();
});
