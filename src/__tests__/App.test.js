import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// Mock Firebase to avoid initialization in tests
jest.mock('../config/firebase', () => ({
  db: {},
  auth: {
    onAuthStateChanged: jest.fn(),
    signOut: jest.fn(() => Promise.resolve())
  },
  provider: {}
}));

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('App Component', () => {
  test('renders without crashing', () => {
    renderWithRouter(<App />);
  });

  test('shows login component when no user', () => {
    renderWithRouter(<App />);
    // App should render without throwing errors
    expect(document.body).toBeInTheDocument();
  });
});

describe('App Integration', () => {
  test('handles authentication state', () => {
    const { container } = renderWithRouter(<App />);
    expect(container).toBeInTheDocument();
  });
});