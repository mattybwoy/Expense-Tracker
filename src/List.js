import React from 'react'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

const List = ({ expenses, handleDelete }) => (

  <div>
    {console.log(handleDelete)}
    <ListGroup>
      {expenses.map(expense => (
        <ListGroupItem key={expense.key}>
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