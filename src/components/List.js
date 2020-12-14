import React from 'react'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

const List = ({ expenses, handleDelete }) => (
  <div>
    <ListGroup>
      {expenses.map(expense => (
        <ListGroupItem style={{backgroundColor: "muted", margin: 3 }}key={expense.key}>
          {expense.name} - £{expense.amount}
            <Button variant="contained" style={{float: 'right'}} 
            className="float-right" 
            onClick={() => handleDelete(expense.key)}>Delete</Button >
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default List