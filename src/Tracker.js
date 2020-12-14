import React, { useState, useEffect } from 'react'
import { Jumbotron } from 'reactstrap'
import logo from './logo.svg'
import './Tracker.css';
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
  const [key, setKey] = useState('')
  const[expenses, setExpenses] = useState(EXPENSE)

  const handleName = event => {
    console.log('Name: ', event.target.value)
    setName(event.target.value)
  }

  const handleAmount = event => {
    console.log('Amount: ', event.target.value)
    setAmount(event.target.value)
    setKey(Date.now())
  }

  const handleSubmitForm = event => {
    event.preventDefault();

    if (name!== '' && amount > 0) {
      const expense = { name, amount, key }
      setExpenses([...expenses, expense])
      setName('')
      setAmount('')
          console.log(expense)
    } else {
      alert('Invalid expense or amount')
    }
  }

  const handleClearExpenses = () => {
    setExpenses([])
  }


  const handleDelete = key => {
    const filteredExpense = expenses.filter(expense => expense.key!==key);
    setExpenses(
   filteredExpense
  )
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

return (
  <Container>
    <Jumbotron style = {{backgroundColor: "#bdbdbd "}}>
      <h2 className = 'text-center'>
        Expenses Tracker
      <br></br>
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
      <BTForm style={{ margin: 10, textAlign: "center" }}>
      <FormGroup className='row'>
      <Label for='exampleEmail' sm={4} >
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
    <FormGroup className='row' >
      <Label for='exampleEmail' sm={4}>
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
    <Button className = "add" type='submit' color='primary' onClick={handleSubmitForm}>
      Add
    </Button>{' '}
    <Button className = "reset" type='submit' color ='danger' onClick={handleClearExpenses}>Reset</Button>
  </BTForm>
        <List expenses={expenses} handleDelete={handleDelete}/>Delete
    </Jumbotron>
        <footer><strong>A MATTYBWOY CREATION</strong><br/>Powered by React<br></br>
      <img src = {logo} alt="https://reactjs.org/" width= "40"></img>
      </footer>
  </Container>
)
}

export default Tracker