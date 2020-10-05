// import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container } from 'reactstrap'
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
<Container style= {{ marginTop: 20}}>
  <p className= 'text-primary'>You clicked {count} times</p>
  <Button onClick={() => setCount(count+1)} color='success'>Increase</Button>
  <Button onClick={()=> setCount(count-1)} color='danger'>Decrease</Button>
</Container>

  );
}

export default App;
