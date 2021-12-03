import '../styles/Form.css'
import React from 'react'
import { Form as BTForm,
FormGroup,
Input,
Label,
Col,
Button,
} from 'reactstrap'

const Form = ({name, amount, handleName, handleAmount, handleSubmitForm, handleClearExpenses}) => (
  <BTForm style={{ margin: 10, textAlign: "center" }}>
      <FormGroup className='row'>
      <Label for='expenseLabel' sm={4}>
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
      <Label for='expenseAmount' sm={4}>
       Amount £
      </Label>
      <Col sm={4}>
        <Input
          role='spinbutton'
          type='number'
          name='amount'
          id='expenseAmount'
          placeholder='0.00'
          value={amount}
          onChange={handleAmount}
        />
      </Col>
    </FormGroup>
    <Button className = 'add' type='submit' color='primary' onClick={handleSubmitForm}>
      Add
    </Button>{' '}
    <Button className='submit' color ='danger' onClick={handleClearExpenses}>Reset</Button>
  </BTForm>
)

export default Form