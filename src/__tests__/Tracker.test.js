import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import Tracker from '../Tracker'


test('Displays title of app Expenses Tracker React App', () => {
  render(<Tracker />)
  expect(screen.getByText("Expenses Tracker")).toBeInTheDocument
})

test('Displays Total Expenditure as £0', () => {
  render(<Tracker />)
  expect(screen.getByText("Total Expenditure:")).toBeInTheDocument
  expect(screen.getByText(/0/i)).toBeInTheDocument
})