
import { useContext, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Card from '../components/Card.js'
import UserContext from '../UserContext.js';

function Withdraw() {

  const [context, setContext] = useContext(UserContext);
  const [render,setRender] =useState(false)

  // Display special HTML if they are not logged in
  if (context.loggedInUser === null) {
    return (
      <div className='content'>
        <h2>Withdraw</h2>
        <div>
          <h4>Please login...</h4>
        </div>
      </div>
    );
  }

  // Get the logged in user
  let user;
  for (const eachUser of context.users) {
    if (eachUser.name === context.loggedInUser) {
      user = eachUser;
    }
  }

  // Set up formik
  const formikProps = {
    initialValues: {
      amount: 0
    },
    validate: values => {
      const errors = {};
     
      if (!values.amount ) {
        errors.amount = 'Invalid values';
     }
    
    
     return errors;
    
    },
   
  onSubmit: (values, { resetForm } ) => {
    
    let flag = false;
    
      for (let i = 0; i < context.users.length; i++) {
        const eachUser = context.users[i];
        if (eachUser.name === context.loggedInUser) {
          if(values.amount > 0 && values.amount <= context.users[i].myaccount){
          context.users[i].myaccount -= Number(values.amount);
          flag = true;
          }
          if(flag) {
            setRender(!render);
            resetForm();
            alert('Amount Withdrawn!');
            }
            else {
              setRender(!render);
              resetForm();
               alert('Invalid withdraw: Below account balance!');
            }
        }
      }
     
    }
  };

 



  return (
    <div className='content'>
   <Card
   header="Withdraw fresh breathe of air!"
      body={(
      <Formik {...formikProps}>
        <Form>
        <div>
        Your balance is: ${user.myaccount}.
      </div>
          <div className='form-group'>
         
            <label htmlFor='amount'>Amount</label>
            <Field type='number' className='form-control' id='amount' name='amount' placeholder='abcd' />
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

export default Withdraw;