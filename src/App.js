
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [datalar, setData] = useState([])
  return (
    <div className="App">
      <Formik 
          initialValues={{
          username: "",
          password: "",
          email: "",
          about: "",
          phoneNumber: "",
        }}
        onSubmit={(deyer) => {
        setData(prevState => [...prevState,deyer])
        }}
        >
       {(inpolar) => (
        <Form className='inplar'>
        <Field className="inp" name="username"/>
        <Field className="inp" name="password" type="password" />
        <Field className="inp" name="email" type="email"/>
        <Field className="inp" name="about" type="text"/>
        <Field className="inp" name="phoneNumber" type="text"/>
        <button type='submit'> sign in</button>
        </Form>
       )
       }
      </Formik>
      {
        <ul>
          {datalar.map((element,index) => {
            return (
              
              <li key={index}>
                <p className='pi'>Username: {element.username}</p>
                <p className='pi'>Password: {element.password}</p>
                <p className='pi'>E-mail: {element.email}</p>
                <p className='pi'>About: {element.about}</p>
                <p className='pi'>phoneNumber: {element.phoneNumber}</p>
              </li>
            )
          })}
        </ul>
      }
    </div>
  );
}

export default App;
