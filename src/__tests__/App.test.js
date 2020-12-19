import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event'


test('renders correctly when there are no expenses', () => {
  const tree = renderer.create(<App /> ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Adds an expense', () => {
  render(<App />)
    const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Coffee')
    const numberBox = screen.getByRole('spinbutton');
    userEvent.type(numberBox, '2')
    userEvent.click(screen.getByText('Add'))
    const note = screen.getByText('Coffee - £2.00');

    expect(note).toBeInTheDocument();
})

test('Allows expense to be deleted', () => {
  render(<App />)
    const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Book')
    const number = screen.getByRole('spinbutton')
    userEvent.type(number, '5')
    userEvent.click(screen.getByText('Add'))
    const note = screen.getByText('Book - £5.00');
    userEvent.click(screen.getByText('Delete'))

    expect(note).not.toBeInTheDocument
})

test('Reset all expenses', async () => {
  render(<App />)
    const textBox = screen.getByRole('textbox');
    userEvent.type(textBox, 'Coffee')
    const numberBox = screen.getByRole('spinbutton');
    userEvent.type(numberBox, '2')
    userEvent.click(screen.getByText('Add'))
    userEvent.click(screen.getByText('Reset'))

    expect(screen.getByText("£0")).toBeInTheDocument;
})


