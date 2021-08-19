import { useContext, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import UserContext from '../UserContext.js';
import Card from '../components/Card.js';

function Deposit() {

  const [context, setContext] = useContext(UserContext);
  //const [user,setUser] =useState({})
  const [render,setRender] =useState(false)

  // Display special HTML if they are not logged in
  if (context.loggedInUser === null) {
    return (
      <div className='content'>
        <h2>Deposit</h2>
        <div>
          <h3>Please login to deposit....</h3>
        </div>
      </div>
    );
  }

  // Get the logged in user
  let user;

  for (const eachUser of context.users) {
    if (eachUser.name === context.loggedInUser) {
      user = eachUser;
      //setUser(eachUser)
    }
  }

  // Set up formik
  const formikProps = {
    initialValues: {
      amount: 0
    },
    
    validate: values => {
      const errors = {};
     
      if (!values.amount) {
        errors.amount = 'Not a number';
     }
    
    
     return errors;
    
    },

   onSubmit: (values, { resetForm } ) => {
    
    let flag = false;
      // Update our user's balance
      for (let i = 0; i < context.users.length; i++) {
        const eachUser = context.users[i];
        if (eachUser.name === context.loggedInUser) {
          if(values.amount > 0){
          context.users[i].balance += Number(values.amount);
          flag = true;
          }
          if(flag) {
            setRender(!render);
            resetForm();
            alert('Amount deposited!');
          }
          else {
            setRender(!render);
            resetForm();
            alert('Invalid deposit! Must be a positive number');
        }
      }
    }
  }
};

  // Render the content
  return (
    <div className='content'>
      <h2>Deposit</h2>
     <Card
      body={(<Formik {...formikProps}>
        <Form>
        <div>
        Your balance is: ${user.balance}.
        </div>
          <div className='form-group'>
            <label htmlFor='amount'>Amount</label>
            <Field type='number' className='form-control' id='amount' name='amount' placeholder='ab' />
            <ErrorMessage className='error' name='amount' component='div' />
          </div>

          <br/>
          <button type='submit' className='btn btn-primary'>Deposit</button>
        </Form>

      </Formik>
      )
      }
      />

    </div>
  );
}

export default Deposit;