import React, { FC, useState } from 'react'
import "../styles/styles.scss";
import { fetchAdminLogin } from '../API/FetchAdmin';
import { useNavigate } from 'react-router-dom';

const SignIn: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const result = await fetchAdminLogin(username, password);
        console.log('Login successful:', result);
        navigate('/admin/dashboard')
    } catch (error) {
        setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
        <h3>Sign In</h3>
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

            <input type="submit" value="Login" className='btn'/>
        </form>
    </div>
  )
}

export default SignIn;