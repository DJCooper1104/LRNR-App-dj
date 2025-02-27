import React from 'react'; 
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../Home'; // Ensure the path is correct
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home Component', () => {
  it('renders the home page correctly', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    // Check if the logo is rendered
    expect(screen.getByAltText('lrnr logo')).toBeInTheDocument();
  });
});