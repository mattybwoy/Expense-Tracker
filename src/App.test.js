import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event'


test('renders correctly when there are no expenses', () => {
  const tree = renderer.create(<App /> ).toJSON();
  expect(tree).toMatchSnapshot();
});

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
