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
      {name: 'a', email:'a@gmail.com', password: 'a', password2: 'a', balance: 0 },                                            
    ]
  })
  console.log(state);
  return (
    <HashRouter>
      
      <UserContext.Provider value={[state,setState,render,setRender]}>
    
        <Route path='/*' exact component={NavBar} />
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

export default App;
