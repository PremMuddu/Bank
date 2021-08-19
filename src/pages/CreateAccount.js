import { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import UserContext from '../UserContext.js';
import Card from '../components/Card.js'

function CreateAccount() {
console.log('CreateAccount')
  const [context, setContext] = useContext(UserContext);
  const user=context.loggedInUser;
  const buttonText = context.users.length > 1 ? 'Create another account': 'Create Account'
  const formikProps = {
    initialValues: {
      name: '',
      email: '',
      password: '',
      password2: ''
    },
    validate: values => {
      const errors = {};
     
      if (!values.name) {
        errors.name = 'Required';
     }
    
     if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

     if (!values.password) {
        errors.password = 'Password Required';
      } else if (values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more'
      }
      
      if (!values.password2) {
        errors.password2 = 'Password Required';
      } else if (values.password2 !==values.password) {
        errors.password2 = 'Password does not match'
      }

      
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      const newContext = {...context}
      newContext.users.push({
        name: values.name,
        email: values.email,
        password: values.password,
        password2:values.password2,
        balance: 0
      });
      setContext (newContext)
      resetForm();
      alert(`Success: Account created with name: ${values.name}`);
      
    }
  };

  return (
    <div className='content'>
    <Card
    header="Create an Account"
    body={(<Formik {...formikProps}>
        <Form>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <Field className='form-control' id='username' name='name' placeholder='Enter username' />
            <ErrorMessage className='error' name='name' component='div' />
          </div>

         
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <Field className='form-control' id='email' name='email' placeholder='Enter email' type='email' />
            <ErrorMessage className='error' name='email' component='div' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Field className='form-control' id='password' name='password' placeholder='Password' type='password' />
            <ErrorMessage className='error' name='password' component='div' />
          </div>
          <div className='form-group'>
            <label htmlFor='password2'>Confirm Password</label>
            <Field className='form-control' id='password2' name='password2' placeholder='Confirm Password' type='password' />
            <ErrorMessage className='error' name='password2' component='div' />
          </div>
          <br/>
          
          <button type='submit' className='btn btn-primary'>{buttonText}</button>
         <span className='form-group-login'>
            Already have an account? Signin<a href='/#/login'>here</a>
          </span>
        
        </Form>
      </Formik>
        
      )
     
      }
      />
      
      
    
    </div>
  );
}


export default CreateAccount;
