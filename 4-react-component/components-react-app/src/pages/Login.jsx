// Login page - Form for user authentication
// Uses React state to manage form input
// Demonstrates: controlled components, event handling, form submission

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Simulate login
    alert('Login successful! Welcome back.');
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    navigate('/');
    window.location.reload();
  };

  return (
    <main className="page login-page">
      <div className="form-container">
        <h1>Welcome Back!</h1>
        <p className="form-subtitle">Log in to your EuroShop account</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="your@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
            />
          </div>

          <div className="form-group">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>

          <Button text="Login" onClick={handleSubmit} style="btn-primary" />
        </form>

        <p className="form-footer">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </main>
  );
}
