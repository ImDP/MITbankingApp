import React from 'react';
import { UserContext } from '../../App';
import {Card} from 'react-bootstrap';

import styles from './Deposit.module.css';

const Deposit = () => {
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState('')
  const [deposit, setDeposit] = React.useState('');
  const [balance, setBalance] = React.useState(Number(ctx.users[0].balance));
  const [button, setButton] = React.useState(true);
  
 


  function validate(field: any){
    if (!field) {
      setStatus('Error input field left blank' );
      setTimeout(() => setStatus(''),3000);
    }
    if(!field === (/^\d+$/.test(field))){
      setStatus('Error input must contain only numbers, no + or - either');
      setTimeout(() => setStatus(''),2000);
      setTimeout(() => setBalance(Number(ctx.users[0].balance)),2000);
    }
      return true;
    
}

function handleCreate(){
  if (!validate(deposit))  return;
  setBalance(balance + Number(deposit));
  ctx.users.map((item: any) =>{
   if(item.name === 'duncan'){
    item.balance = balance
   }
   return balance;
  })
}    


  return(
    <Card 
    style={{ width: '18rem' }}
    >
  <Card.Body>
    <Card.Title>Balance = { balance }</Card.Title>
    <Card.Text>
     <input type="text" value={deposit} onChange={e => {setDeposit(e.currentTarget.value); setButton(false)}} />
    </Card.Text>
    <p>{status}</p>
    <button type='submit' disabled={button} onClick={handleCreate}>Deposit Funds</button>
  </Card.Body>
</Card>
  )
 
 };

export default Deposit;
