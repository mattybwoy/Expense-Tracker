import React, { useState, useEffect } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import logo from './logo.svg'
import '../src/styles/Tracker.css';
import Form from './components/Form'
import List from './components/List'

const EXPENSE = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []

function Tracker() {
  const [name, setName] = useState('')
  let [amount, setAmount] = useState('')
  const [key, setKey] = useState('')
  const[expenses, setExpenses] = useState(EXPENSE)

  const handleName = event => {
    setName(event.target.value)
  }

  const handleAmount = event => {
    setAmount(event.target.value)
    setKey(Date.now())
  }

  const handleSubmitForm = event => {
    event.preventDefault();
    if (name!== '' && amount > 0) {
      amount = parseFloat(amount).toFixed(2)
      const expense = { name, amount, key }
      setExpenses([...expenses, expense])
      setName('')
      setAmount('')
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
        💸
        Expenses Tracker
        💸
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
        <Form name = {name} amount = {amount} handleName = {handleName} handleAmount = {handleAmount} handleSubmitForm = {handleSubmitForm} handleClearExpenses = {handleClearExpenses}/>
        <List expenses={expenses} handleDelete={handleDelete}/>
    </Jumbotron>
        <footer><strong>A MATTYBWOY CREATION</strong><br/>Powered by React<br></br>
      <img src = {logo} alt="https://reactjs.org/" width= "40"></img>
      </footer>
  </Container>
)
}

export default Tracker