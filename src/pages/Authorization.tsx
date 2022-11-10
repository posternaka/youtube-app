import React from 'react'
import '../styles/style.scss';

const Authorization = () => {
  return (
    <div className='login'>
      <h2>Login</h2>
      <form>
        <div className='user'>
          <input type="text" name="" required/>
          <label>Username</label>
        </div>
        <div className='user'>
          <input type="password" name="" required/>
          <label>Password</label>
        </div>
        <div className='button-form'>
          <button id="submit">Submit</button>
          <div id="register">
            Don't have an account?
            <button>Register</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Authorization;