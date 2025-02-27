import React from 'react'; 
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AccountPage from '../Account'; // Ensure the path is correct

describe('AccountPage Component', () => {
  it('renders the account page correctly', () => {
    render(<AccountPage />);

    // Check if the heading is rendered
    expect(screen.getByText('Account')).toBeInTheDocument();
  });
});