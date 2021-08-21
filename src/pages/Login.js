import { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage, } from 'formik';
import Card from '../components/Card.js'
import UserContext from '../UserContext.js';

function checkLogin(name, password, users) {
  for (const user of users) {
    if (
      user.name === name &&
      user.password === password
    ) {
      return true;
    }
  }
  return false;
}

function Login(props) {
console.log("Login")
  const [context, setContext, render, setRender] = useContext(UserContext);

  const formikProps = {
    initialValues: {
      name: '',
      password: ''
    },
    validate: values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Username Required';
      }
      if (!values.password) {
        errors.password = 'Password Required';
      } 
      const isLoginValid = checkLogin(
        values.name,
        values.password,
        context.users
      );
      if (!isLoginValid) {
        
        errors.login = 'Invalid login';
      }
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      
      const newState = {...context};
      newState.loggedInUser = values.name;
      setContext(newState);
     
      console.log(newState,context);
      resetForm();
      alert(`Welcome back, ${values.name}!`);
      props.history.push('/balance')
    }
  };
  


  return (
    <div className='content'>
    
      <Card
       header= "Sign in"
       body={(
      <Formik {...formikProps}>
        <Form>
          <div className='form-group'>
            <label htmlFor='name'>Username</label>
            <Field className='form-control' id='name' name='name' placeholder='Username' />
            <ErrorMessage className='error' name='name' component='div' />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Field className='form-control' id='password' name='password' placeholder='Password' type='password' />
            <ErrorMessage className='error' name='password' component='div' />
          </div>
          
          <br/>
          <button type='submit' className='btn btn-primary'>Login</button>
          
          <br/>
          <span className='form-group-login'>
            Check balance <a href='/#/balance'>here</a>
          </span>
        </Form>
      </Formik>
    )
    }
    />
    </div>
  );
}

export default Login;