import { useContext } from 'react';
import Card from '../components/Card.js'
import UserContext from '../UserContext.js';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AllData() {

  const [context, setContext] = useContext(UserContext);

  return (
  <div className='content'>
    <Card
    header="All Data"
    body={(<Table striped bordered hover className ='card-body'>
    <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
        {context.users.map(user => {
          return (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.balance}</td>
            </tr>
          )
        })}
        </tbody>
      </Table>
    )
    }
    />

  </div>
  );
}
    
 
 
export default AllData;