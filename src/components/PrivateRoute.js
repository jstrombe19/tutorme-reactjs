import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function PrivateRoute(props) {
  return <Route {...props} render={(routerProps) => {
    return localStorage.token
      ? (
        <h2>This is the private route component!</h2>
      )
      : ( 
        <>
          <button type='button' onClick={() => routerProps.history.push('/login')}>Login</button>
          <button type='button' onClick={() => routerProps.history.push('signup')}>Signup</button>
        </>
      )
    }
  } />
}