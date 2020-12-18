import React from 'react';
import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'


test('Delete button renders for each expense', () => {
  
const expenses = [{name: "Book", amount: "5", key: 1607957294201}]

  render(<div>
    <ListGroup>
      {expenses && expenses.map(expense => (
        <ListGroupItem style={{backgroundColor: "muted", margin: 3 }}key={expense.key}>
          {expense.name} - £{expense.amount}
            <Button variant="contained" style={{float: 'right'}} 
            className="float-right" 
            onClick={() => handleDelete(expense.key)}>Delete</Button >
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>)

    expect(screen.getByText('Delete')).toBeInTheDocument
})