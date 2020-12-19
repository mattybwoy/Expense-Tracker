import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import Form from '../components/Form'


test('Displays Name of Expense Form', () => {
  render(<Form />)
  expect(screen.getByText("Name of Expense")).toBeInTheDocument
})

test('Displays buttons for adding and resetting expenses', () => {
  render(<Form />)
  expect(screen.getByText("Add")).toBeInTheDocument
  expect(screen.getByText("Reset")).toBeInTheDocument
})