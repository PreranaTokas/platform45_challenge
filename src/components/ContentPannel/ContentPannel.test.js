import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentPannel from './ContentPannel';

describe('<ContentPannel />', () => {
  test('it should mount', () => {
    render(<ContentPannel />);
    
    const contentPannel = screen.getByTestId('ContentPannel');

    expect(contentPannel).toBeInTheDocument();
  });
});