import React, { FC, useState } from 'react'
import "../styles/styles.scss";
import { useNavigate } from 'react-router-dom';
import { fetchAdminRegister } from '../API/FetchAdminReg';

const Register: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const result = await fetchAdminRegister(username, password);
        console.log('Register successful:', result);
        navigate('/admin/dashboard')
    } catch (error) {
        setError('Register failed. Please check your credentials.');
    }
  };

  return (
    <div>
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username"><b>Username</b></label>
            <input 
              type="text" 
              placeholder='Enter Username' 
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password"><b>Password</b></label>
            <input
              type="password" 
              placeholder='Enter Password' 
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <input type="submit" value="Register" className='btn'/>
        </form>
    </div>
  )
}

export default Register;