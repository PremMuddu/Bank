import { useContext } from 'react';
import Card from '../components/Card.js'
import UserContext from '../UserContext';




function MyAccount() {

  const [context, setContext] = useContext(UserContext);

  let message;

  if (context.loggedInUser === null) {
    message = (
      <Card
      header="A better footprint on the planet!"
      body={(
      <div>
        Please login to view your Account!.
      </div>
      )
      }
      />
    );
  } 
  

  else {

  
    let user;
    for (const eachUser of context.users) {
      if (eachUser.name === context.loggedInUser) {
        user = eachUser;
      }
    }

    
    message = (
    
      <Card
      header={(
        <div>
        Welcome {user.name}!
        </div>

      )
      }
      body={(
        <div>
        Would you like to deposit or withdraw?<br/>
        Your current balance is ${user.myaccount}.<br/>
       

        </div>
      )
      }
      />
      
    );   
  }

  return (
    <div className='content'>

      {message}
       <br/>
      <button type='submit' className='btn-btn-secondary'><a href='/#/deposit'>Deposit</a></button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button type='submit' className='btn-btn-secondary'><a href='/#/withdraw'>Withdraw</a></button>&nbsp;&nbsp;&nbsp;&nbsp;
     

          <br/> 
          
        </div>
  );
}

export default MyAccount;