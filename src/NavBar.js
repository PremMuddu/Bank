import * as Bootstrap from 'react-bootstrap';
import "./Navbar.css";
import { useContext, useState } from 'react';
import UserContext from './UserContext.js';

function NavBar() {
  const [context, setContext] = useContext(UserContext) || []
  const user= context?.loggedInUser 
  console.log(context);
 const loggedInLinks = [
 <Bootstrap.Nav.Link href='/#/balance'>Balance</Bootstrap.Nav.Link>,
 <Bootstrap.Nav.Link href='/#/deposit'>Deposit</Bootstrap.Nav.Link>,
 <Bootstrap.Nav.Link href='/#/withdraw'>Withdraw</Bootstrap.Nav.Link>,
]

 const loggedOutLinks =[
  <Bootstrap.Nav.Link href='/#'>Home</Bootstrap.Nav.Link>,
  <Bootstrap.Nav.Link href='/#/create-account'>Create Account</Bootstrap.Nav.Link>,
 <Bootstrap.Nav.Link href='/#/login'>Login</Bootstrap.Nav.Link>,

 ]

 

  return (
    <Bootstrap.Navbar bg="dark" variant="dark" >
    
      <Bootstrap.Container>
       <Bootstrap.Nav className="me-auto">
       <h3 classname="title">
          Universal banking
        </h3>
      
      {
        user
        && loggedInLinks
      }
      
      {
        !user 
      && loggedOutLinks
      }
          {/* <Bootstrap.Nav.Link href='/#'>Home</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/create-account'>Create Account</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/login'>Login</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/balance'>Balance</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/welcome'>Welcome</Bootstrap.Nav.Link>
         <Bootstrap.Nav.Link href='/#/deposit'>Deposit</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/withdraw'>Withdraw</Bootstrap.Nav.Link> */}
          
          <Bootstrap.Nav.Link href='/#/all-data'>All Data</Bootstrap.Nav.Link>
        </Bootstrap.Nav>
      </Bootstrap.Container>
    </Bootstrap.Navbar>
  );
}

export default NavBar;