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
  render(<App />)
  expect(screen.getByText("Expenses Tracker React App")).toBeInTheDocument
})

test('Adds an expense', () => {
  render(<App />)
    const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Coffee')
    const numberBox = screen.getByText('Amount £');
    userEvent.click(numberBox, '2')
    userEvent.click(screen.getByText('Add'))
    const note = screen.getByText('Coffee');

    expect(note).toBeInTheDocument();
})