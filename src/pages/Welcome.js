import { useContext } from 'react';

import UserContext from '../UserContext';
import Card from '../components/Card.js';

function Welcome() {

  const [context, setContext] = useContext(UserContext);

  let message;

  // Handle if user is not logged in
  if (context.loggedInUser === null) {
    message = (
      <div>
        You are not logged in.
      </div>
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
      <div>
        Welcome back, {user.name}!
        <br/>
        Your balance is ${user.balance}.
      </div>
    );   
  }

  return (
     <div className='content'>
         <h2>Welcome</h2>
         {message}
     </div>
  );
}
     
export default Welcome;