import { useContext, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import UserContext from '../UserContext.js';
import Card from '../components/Card.js';

function Deposit() {

  const [context, setContext] = useContext(UserContext);

  const [render,setRender] =useState(false)


  if (context.loggedInUser === null) {
    
    return (
      <div className='content'>
        <h2>Deposit</h2>
        <div>
          <h4>Please login...</h4>
        </div>
      </div>
    );
  }


  let user;

  for (const eachUser of context.users) {
    if (eachUser.name === context.loggedInUser) {
      user = eachUser;
  
    }
  }


  const formikProps = {
    initialValues: {
      amount: 0
    },
    
    validate: values => {
      const errors = {};
     
      if (!values.amount) {
        errors.amount = 'Invalid values';
     }
    
    
     return errors;
    
    },

   onSubmit: (values, { resetForm } ) => {
    
    let flag = false;
    
      for (let i = 0; i < context.users.length; i++) {
        const eachUser = context.users[i];
        if (eachUser.name === context.loggedInUser) {
          if(values.amount > 0){
          context.users[i].myaccount += Number(values.amount);
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


  return (
    <div className='content'>
    
     <Card
     header="Deposit to grow a plant!"
      body={(<Formik {...formikProps}>
        <Form>
        <div>
        Your balance is: ${user.myaccount}.
        </div>
          <div className='form-group'>
            <label htmlFor='amount'>Amount</label>
            <Field type='number' className='form-control' id='amount' name='amount' placeholder='ab' />
            <ErrorMessage className='error' name='amount' component='div' />
          </div>

          <br/>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </Form>

      </Formik>
      )
      }
      />

    </div>
  );
}

export default Deposit;