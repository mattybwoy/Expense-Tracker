import React, { useState } from 'react'
import { Jumbotron } from 'reactstrap'
import logo from './logo.svg'
import { Button, Container } from 'reactstrap'
import Form from './components/Form'
import List from './List'

const EXPENSE = [
  {id: 1, name: "Buy a book", amount: 10},
  {id: 2, name: "Buy CD", amount: 5}
]

function Tracker() {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const[expenses, setExpenses] = useState(EXPENSE)

  const handleName = event => {
    console.log('Name ', event.target.value)
    setName(event.target.value)
  }

  const handleAmount = event => {
    console.log('Amount ', event.target.value)
    setAmount(event.target.value)
  }

  const handleSubmitForm = event => {
    event.preventDefault();

    if (name!== '' && amount > 0) {
      const expense = { name, amount }
      setExpenses([...expenses, expense])
      console.log(expense)
      setName('')
      setAmount('')
    } else {
      console.log('Invalid expense or amount')
    }

  }

return (
  <Container>
    <Jumbotron fluid>
      <h2 className= 'display-6' className = 'text-center'>
        Expenses Tracker React App
      <br></br>
        <img src={logo} style={{ width: 50, height: 50 }} alt='react-logo' />
      </h2>
      <div className= 'text-center'>
        <p>
          Total Expense: {''}
          <span className='text success'>
            £{''}
            {expenses.reduce((accumulator, currentValue) => {
              return (accumulator += parseInt(currentValue.amount))
            }, 0)}
          </span>
        </p>
      {
        /* <label>
                Enter Item: <input type='text'/>
                <br></br>
                <br></br>
                Enter Cost: <input type = 'number'/>
                  <br></br>
                  <br></br>
                  <input type = 'submit' value = 'Add'/ >
                  </label> */
      }  
      </div>
      <Form 
      name={name}
      amount={amount}
      handleName={handleName}
      handleAmount={handleAmount}
      handleSubmitForm={handleSubmitForm}
      />
        <List expenses={expenses} />
    </Jumbotron>
  </Container>
)
}

export default Tracker