import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tracker from './Tracker'


test('Displays title of app Expenses Tracker React App', () => {
  render(<Tracker />)
  expect(screen.getByText("Expenses Tracker")).toBeInTheDocument
})

test('Displays Total Expenditure as £0', () => {
  render(<Tracker />)
  expect(screen.getByText("Total Expenditure:")).toBeInTheDocument
  expect(screen.getByText(/0/i)).toBeInTheDocument
})

test('Adds an expense', () => {
  render(<Tracker />)
    const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Coffee')
    const numberBox = screen.getByRole('spinbutton');
    userEvent.type(numberBox, '2')
    userEvent.click(screen.getByText('Add'))
    const note = screen.getByText('Coffee - £2.00');

    expect(note).toBeInTheDocument();
})


test('Reset all expenses', async () => {
    render(<Tracker />)
    const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Coffee')
    const numberBox = screen.getByRole('spinbutton');
    userEvent.type(numberBox, '2')
    userEvent.click(screen.getByText('Add'))
    userEvent.click(screen.getByText('Reset'))

    expect(screen.getByText("£0")).toBeInTheDocument;
})

