import React, { useState, useEffect } from 'react'
import { Jumbotron } from 'reactstrap'
import logo from './logo.svg'
//import { Button, Container } from 'reactstrap'
//import Form from './components/Form'
import List from './List'
import { Form as BTForm,
FormGroup,
Input,
Label,
Col,
Button,
Container } from 'reactstrap'

const EXPENSE = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []

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

  const handleClearExpenses = () => {
    setExpenses([])
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

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
          Total Expenditure: {''}
          <span className='text success'>
            £{''}
            {expenses.reduce((accumulator, currentValue) => {
              return (accumulator += parseFloat(currentValue.amount))
            }, 0)}
          </span>
        </p>
 
      </div>
      <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
      <FormGroup className='row'>
      <Label for='exampleEmail' sm={2}>
        Name of Expense
      </Label>
      <Col sm={4}>
        <Input
          type='text'
          name='name'
          id='expenseName'
          placeholder='Expense'
          value={name}
          onChange={handleName}
        />
      </Col>
    </FormGroup>
    <FormGroup className='row'>
      <Label for='exampleEmail' sm={2}>
       Amount £
      </Label>
      <Col sm={4}>
        <Input
          type='number'
          name='amount'
          id='expenseAmount'
          placeholder='0.00'
          value={amount}
          onChange={handleAmount}
        />
      </Col>
    </FormGroup>
    <Button type='submit' color='primary' >
      Add
    </Button>{' '}
    <Button type='submit' color ='danger' onClick={handleClearExpenses}>Reset</Button>
  </BTForm>
        <List expenses={expenses} />
    </Jumbotron>
  </Container>
)
}

export default Tracker