import React from 'react'; 
import '@testing-library/jest-dom';
// Add this line
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import QuizResults from '../QuizResults'; // Ensure the path is correct
import { BrowserRouter as Router } from 'react-router-dom';

describe('QuizResults Component', () => {
  it('renders the quiz results page correctly', () => {
    render(
      <Router>
        <QuizResults />
      </Router>
    );

    // Check if the heading is rendered
    expect(screen.getByText('lrnr')).toBeInTheDocument();
  });
});