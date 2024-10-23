import React, { useState } from 'react';
import './App.css'

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkStrength(value);
  };

  const checkStrength = (password) => {
    let strengthScore = 0;

    // Length of the password (min 8 characters)
    if (password.length >= 8) strengthScore += 1;

    // Contains both lower and uppercase letters
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strengthScore += 1;

    // Contains numbers
    if (/\d/.test(password)) strengthScore += 1;

    // Contains special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strengthScore += 1;

    // Determine the strength based on score
    if (strengthScore <= 1) {
      setStrength('Weak');
    } else if (strengthScore === 2) {
      setStrength('Medium');
    } else if (strengthScore === 3) {
      setStrength('Strong');
    } else {
      setStrength('Very Strong');
    }
  };

  return (
    <div className="password-checker">
      <h3>Password Strength Checker</h3>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <div className={`strength ${strength.toLowerCase()}`}>
        <p>Password strength: {strength}</p>
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
