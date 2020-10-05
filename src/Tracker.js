import React, { useState } from 'react'
import { Jumbotron } from 'reactstrap'
import logo from './logo.svg'
import { Button, Container } from 'reactstrap'

const EXPENSE = [
  {id: 1, name: "buy a book", amount: 10},
  {id: 2, name: "buy cd", amount: 5}
]

function Tracker() {
const[expenses, setExpenses] = useState(EXPENSE)

return (
  <Container className='text-center'>
    <Jumbotron fluid>
      <h2 className= 'display-6'>
        Expenses Tracker React App
      <br></br>
        <img src={logo} style={{ width: 50, height: 50 }} alt='react-logo' />
      </h2>
      <div>
        <p>
          Total Expense: {''}
          <span className='text success'>
            £{''}
            {expenses.reduce((accumulator, currentValue) => {
              return (accumulator += parseInt(currentValue.amount))
            }, 0)}
          </span>
        </p>
      <label>
        Enter Item: <input type='text'/>
        <br></br>
        <br></br>
        Enter Cost: < input type = 'number' / >
          <br></br>
          <br></br>
          <input type = 'submit' value = 'Add'/ >
          </label>
      </div>
    </Jumbotron>
  </Container>
)
}

export default Tracker