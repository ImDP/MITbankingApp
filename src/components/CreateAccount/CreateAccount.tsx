import React from 'react'; 
import { UserContext } from "../../App";
import Card from "../../UserContext";






function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [button, setButton]     = React.useState(true);
  const ctx = React.useContext(UserContext);  

  

  
  
  function validate(field: string, label: string){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),1000);
        return false;
      } else if(password.length < 10) {
        setStatus(label + 'must be 10 characters or longer');
        setTimeout(() => setStatus(''),1000);
      }
        return true;
      
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (password.length < 8) return;
    ctx.users.push({name,email,password,balance:0});
    if(validate(name, 'name') && validate(email, 'email') && validate(password, 'password')){
      
    }
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="secondary"
      header="FYI - This is A Terrible Idea"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => {setName(e.currentTarget.value); setButton(false)}} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {setEmail(e.currentTarget.value); setButton(false)}}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {setPassword(e.currentTarget.value);setButton(false)}}/><br/>
              <button type="submit" id="submit" className="btn btn-light" disabled={button}  onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Create New Account</button>
              </>
            )}
    />
  )
}

export default CreateAccount;

