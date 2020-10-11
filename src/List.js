import React from 'react'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

const List = ({ expenses }) => (
  <div>
    <ListGroup>
      {expenses.map(item => (
        <ListGroupItem key={item.id}>
          {item.name} - £{item.amount}
            <Button variant="contained" style={{float: 'right'}} className="float-right">Delete</Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default List