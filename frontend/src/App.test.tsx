import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Service } from './interface/Service';

test('renders learn react link', () => {
  const mockService = {} as Service; // Valor fictício para a propriedade service
  const mockSetService = jest.fn(); // Função fictícia para a propriedade setService

  render(<App  />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
