import { useContext } from 'react';
import Card from '../components/Card.js'
import UserContext from '../UserContext';




function Balance() {

  const [context, setContext] = useContext(UserContext);

  let message;

  // Handle if user is not logged in
  if (context.loggedInUser === null) {
    message = (
      <Card
      header="Balance"
      body={(
      <div>
        Login to view your Balance.
      </div>
      )
      }
      />
    );
  } 
  
  // Handle if user is logged in
  else {

    // Get a reference to the logged in user
    let user;
    for (const eachUser of context.users) {
      if (eachUser.name === context.loggedInUser) {
        user = eachUser;
      }
    }

    // Update the message with the user's information
    message = (
    
      <Card
      header= "Balance"
      body={(
        <div>
        Welcome back, {user.name}!
        <br/>
        Your balance is ${user.balance}.
        </div>
      )
      }
      />
      
    );   
  }

  return (
    <div className='content'>
      <h2>Balance</h2>
      {message}
      <br/>
      <button type='submit' className='btn btn-secondary'><a href='/#/deposit'>deposit</a></button>
      <button type='submit' className='btn btn-secondary'><a href='/#/withdraw'>withdraw</a></button>
      <button type='submit' className='btn btn-secondary'><a href='/#/login'>login</a></button>  

          <br/>
          
        </div>
  );
}

export default Balance;