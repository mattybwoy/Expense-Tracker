import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../components/Form'

test('Displays Name of Expense Form', () => {
  render(<Form />)
  expect(screen.getByText("Name of Expense")).toBeInTheDocument
})