import Footer from "@/components/footer/Footer.jsx";
import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import * as buttonMetadata from '../../../components/button/buttonMetadata';

jest.mock('../../../components/button/buttonMetadata', () => ({
    ...jest.requireActual('../../../components/button/buttonMetadata'),
    handleStartTodayButtion: jest.fn(), // Mock the specific function
  }));

test('renders all elements in the footer correctly', () => {
    render(<Footer />);
    expect(screen.getByText('Try Dominion Energy today!')).toBeInTheDocument();
    expect(screen.getByText(/Get started for free/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Have more questions/i)).toBeInTheDocument();
  });
  
  // Test Case 2: Verify External Links
  test('all external links have the correct href attributes', () => {
    render(<Footer />);
    expect(screen.getByText('Terms & privacy').closest('a')).toHaveAttribute('href', '#');
    expect(screen.getByText('Security').closest('a')).toHaveAttribute('href', '#');
    expect(screen.getByText('Status').closest('a')).toHaveAttribute('href', '#');
    // Add assertions for other links...
  });
  
  test('calls handleStartTodayButton when the button is clicked', () => {
    // Render the Footer component
    render(<Footer />);
  
    // Simulate a click on the button
    const button = screen.getByRole('button');
    fireEvent.click(button);
  
    // Assert that the mock function was called
    expect(buttonMetadata.handleStartTodayButtion).toHaveBeenCalled();
  });
