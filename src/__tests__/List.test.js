import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
//import renderer from 'react-test-renderer';
//import App from '../App';
import List from '../components/List'


xtest('Allows expense to be deleted', () => {
  render(<List/>)
  const expenses = [{name: "Book", amount: "5", key: 1607957294201}]

  const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Book')
    const numberBox = screen.getByRole('spinbutton');
    userEvent.click(numberBox, 5)
    userEvent.click(screen.getByText('Add'))
    const note = screen.getByDisplayValue('Book');
    userEvent.click(screen.getByText('Delete'))

    expect(note).not.toBeInTheDocument
})