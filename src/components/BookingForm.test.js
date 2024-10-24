// src/components/BookingForm.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
  test('renders the "Make Your Reservation" button', () => {

    render(<BookingForm availableTimes={['17:00']} dispatch={jest.fn()} />);
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('calls the submit handler when "Make Your Reservation" button is clicked', () => {
    const handleSubmit = jest.fn();

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

  });
});
