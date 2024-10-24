import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders contact information', () => {
    render(<Footer />);

    // Check if the contact information is rendered
    expect(screen.getByText('123 Lemon Street, Chicago, IL')).toBeInTheDocument();
    expect(screen.getByText('Phone: (123) 456-7890')).toBeInTheDocument();
    expect(screen.getByText('Email: contact@littlelemon.com')).toBeInTheDocument();
  });

  it('renders opening hours', () => {
    render(<Footer />);

    // Check if the opening hours are rendered
    expect(screen.getByText('Monday - Friday: 11:00 AM - 10:00 PM')).toBeInTheDocument();
    expect(screen.getByText('Saturday: 12:00 PM - 11:00 PM')).toBeInTheDocument();
    expect(screen.getByText('Sunday: 12:00 PM - 9:00 PM')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);

    // Check if the social media links are present
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });
});
