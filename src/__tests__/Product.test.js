import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Product from '../components/product/Product';

// Mock Firebase
jest.mock('../config/firebase', () => ({
  db: {
    collection: jest.fn(() => ({
      doc: jest.fn(() => ({
        get: jest.fn(() => Promise.resolve({ exists: false })),
        set: jest.fn(() => Promise.resolve())
      }))
    }))
  }
}));

describe('Product Component', () => {
  const mockProps = {
    id: '1',
    title: 'Test Product',
    price: 29.99,
    rating: 4,
    image: 'https://example.com/image.jpg'
  };

  test('renders product information correctly', () => {
    render(<Product {...mockProps} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });

  test('displays correct number of stars for rating', () => {
    render(<Product {...mockProps} />);
    
    const stars = screen.getAllByText('⭐');
    expect(stars).toHaveLength(4);
  });

  test('has add to cart functionality', () => {
    render(<Product {...mockProps} />);
    
    const addToCartButton = screen.getByText(/add to cart/i);
    expect(addToCartButton).toBeInTheDocument();
  });

  test('add to cart button is clickable', () => {
    render(<Product {...mockProps} />);
    
    const addToCartButton = screen.getByText(/add to cart/i);
    fireEvent.click(addToCartButton);
    // Button should be clickable without errors
  });
});