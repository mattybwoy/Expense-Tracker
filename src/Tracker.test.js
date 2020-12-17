import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
//import renderer from 'react-test-renderer';
//import App from './App';
import Tracker from './Tracker'


test('Displays title of app Expenses Tracker React App', () => {
  render(<Tracker />)
  expect(screen.getByText("Expenses Tracker")).toBeInTheDocument
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

test('Reset all expenses', () => {
    render(<Tracker />)
    const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Coffee')
    const numberBox = screen.getByRole('spinbutton');
    userEvent.type(numberBox, '2')
    userEvent.click(screen.getByText('Add'))
    userEvent.click(screen.getByText('Reset'))

    expect(screen.getByText("£0")).toBeInTheDocument;
})

