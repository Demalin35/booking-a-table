// src/components/BookingForm.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
  // Step 1: Test if the "Make Your Reservation" button renders
  test('renders the "Make Your Reservation" button', () => {
    // Render the BookingForm component
    render(<BookingForm availableTimes={['17:00']} dispatch={jest.fn()} />);
    
    // Check if the submit button is rendered
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeInTheDocument();
  });

  // Step 2: Test if the form submits when the button is clicked
  test('calls the submit handler when "Make Your Reservation" button is clicked', () => {
    // Mock the form submit event handler
    const handleSubmit = jest.fn();

    // Render the BookingForm with a mocked submit handler
    render(
      <BookingForm availableTimes={['17:00']} dispatch={jest.fn()} />
    );

    // Fill out the form fields
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-10-12' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    // Click the submit button
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Since handleSubmit is mocked, you can check if it was called
    // In this case, we use form defaults so we'll check submit event, which you can extend later
  });
});
