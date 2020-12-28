import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import SignIn from '../../pages/SignIn';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SignIn page', () => {
  it('should be able to sign in', () => {
    const { getByPlaceholderText } = render(<SignIn />);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');
  });
});
