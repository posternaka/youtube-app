import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/style.scss';

const Authorization = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleToMove = () => {
    return value !== 'Nikita' && password !== '123456' ? alert('Повторите попытку') : navigate('/search');
  }

  return (
    <div className='login'>
      <h2>Login</h2>
      <form>
        <div className='user'>
          <input type="text" name="" value={value} onChange={(e) => handleChangeInput(e)} required />
          <label>Username</label>
        </div>
        <div className='user'>
          <input type="password" name="" value={password} onChange={(e) => handleChangePassword(e)} required />
          <label>Password</label>
        </div>
        <div className='button'>
          <button id="submit" onClick={() => handleToMove()}>Submit</button>
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