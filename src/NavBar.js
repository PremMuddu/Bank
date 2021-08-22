import * as Bootstrap from 'react-bootstrap';
import "./Navbar.css";
import { useContext, useState } from 'react';
import UserContext from './UserContext.js';
import Logo from './assets/earthLogo.jpg';


function NavBar(props) {
  const [context, setContext] = useContext(UserContext) || []
  const user= context?.loggedInUser 
  console.log(context);

  const logOut = () =>{
    const newState = {...context};
    newState.loggedInUser = null;
    props.history.push('/#')
    setContext(newState);

  }
 const loggedInLinks = [
 <Bootstrap.Nav.Link href='/#/my-account'>MyAccount</Bootstrap.Nav.Link>,
 <Bootstrap.Nav.Link href='/#/deposit'>Deposit</Bootstrap.Nav.Link>,
 <Bootstrap.Nav.Link href='/#/withdraw'>Withdraw</Bootstrap.Nav.Link>,
 <Bootstrap.Nav.Link href='/#/all-data'>All Data</Bootstrap.Nav.Link>,
 <Bootstrap.Nav.Link onClick={logOut}>Logout</Bootstrap.Nav.Link>,
]

 const loggedOutLinks =[
  <Bootstrap.Nav.Link href='/#'>Home</Bootstrap.Nav.Link>,
  <Bootstrap.Nav.Link href='/#/create-account'>Create Account</Bootstrap.Nav.Link>,
 <Bootstrap.Nav.Link href='/#/login'>Login</Bootstrap.Nav.Link>,
<Bootstrap.Nav.Link href='/#/all-data'>All Data</Bootstrap.Nav.Link>,
 ]

 

  return (
    <Bootstrap.Navbar bg="black" variant="dark" >
     <Bootstrap.Container>
      <img src={Logo} className="earth-logo" alt="earth logo" /> &nbsp;&nbsp;&nbsp;
        <h3 classname="title">
          Universal Banking
        </h3>
       <Bootstrap.Nav className="me-auto">
       {
        user
        && loggedInLinks
      }
      
      {
        !user 
      && loggedOutLinks
      }
      </Bootstrap.Nav>
      </Bootstrap.Container>
    </Bootstrap.Navbar>
  );
}

export default NavBar;