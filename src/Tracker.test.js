import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer';
import App from './App';
import Tracker from './Tracker'

test('renders correctly when there are no expenses', () => {
  const tree = renderer.create( < Tracker / > ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Displays title of app Expenses Tracker React App', () => {
  render(<Tracker />)
  expect(screen.getByText("Expenses Tracker")).toBeInTheDocument
})

test('Adds an expense', () => {
  render(<App />)
    const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Coffee')
    const numberBox = screen.getByRole('spinbutton');
    userEvent.click(numberBox, 2)
    userEvent.click(screen.getByText('Add'))
    const note = screen.getByDisplayValue('Coffee');

    expect(note).toBeInTheDocument();
})

test('Reset all expenses', () => {
    render(<App />)
    const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Coffee')
    const numberBox = screen.getByRole('spinbutton');
    userEvent.click(numberBox, 2)
    userEvent.click(screen.getByText('Add'))
    userEvent.click(screen.getByText('Reset'))

    expect(screen.getByText("£0")).toBeInTheDocument;
})

