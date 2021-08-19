import {Route, HashRouter} from 'react-router-dom';
import {useState} from 'react';
import UserContext from './UserContext.js';
import NavBar from './NavBar.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import CreateAccount from './pages/CreateAccount.js';
import Deposit from './pages/Deposit.js';
import AllData from './pages/AllData.js';
import Balance from './pages/Balance.js';
import Withdraw from './pages/Withdraw.js';
import Welcome from './pages/Welcome.js';
import "./App.css";

function App() {
  const [render,setRender] =useState(false)
  const [state, setState] = useState({
    loggedInUser: null,
    users: [
      { name: 'john doe', email:'johndoe@gmail.com', password: 'secretly', password2: 'secretly', balance: 0 },
                                                     
    ]
  })
  console.log(state);
  return (
    <HashRouter>
      
      <UserContext.Provider value={[state,setState,render,setRender]}>
      <NavBar />
        <Route path='/' exact component={Home} />
        <Route path='/create-account' component={CreateAccount} />
        <Route path='/login' component={Login} />
        <Route path='/deposit' component={Deposit} />
        <Route path='/all-data' component={AllData} />
        <Route path='/withdraw' component={Withdraw} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/balance' component={Balance} />
      </UserContext.Provider>
    </HashRouter>
  );
  
}
/*function CreateAccount(){
  const ctx = React.useContext(UserContext);

  function handle(data) {
    ctx.users.push({name:data.name,email:data.email, password:data.password,balance:100});
    return true;
  }
 return (
  <BankForm
  bgcolor="primary"
  label="Create Account"
  handle={handle}
  hideAmount={true}
  successButton='Add another account'
  />
}*/
export default App;
