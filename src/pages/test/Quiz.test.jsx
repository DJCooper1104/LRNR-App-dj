import React from 'react'; 
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Quiz from '../Quiz'; // Ensure the path is correct
import { BrowserRouter as Router } from 'react-router-dom';

describe('Quiz Component', () => {
  it('renders the quiz form correctly', () => {
    render(
      <Router>
        <Quiz />
      </Router>
    );

    // Check if the heading is rendered
    expect(screen.getByText('Quiz Generation Options')).toBeInTheDocument();
  });
});