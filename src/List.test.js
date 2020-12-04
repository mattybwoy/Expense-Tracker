import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer';
import App from './App';

//import List from '../src/List'

test('Allows expense to be deleted', () => {
  render(<App/>)

  const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Coffee')
    const numberBox = screen.getByRole('spinbutton');
    userEvent.click(numberBox, 2)
    userEvent.click(screen.getByText('Add'))
    const note = screen.getByDisplayValue('Coffee');
    userEvent.click(screen.getByText('Delete'))

    expect(note).not.toBeInTheDocument
})