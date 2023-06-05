import React, { useState } from 'react';
import './page-css/registration-page.scss'

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Aadhaar Number:', aadhaarNumber);
    console.log('Phone Number:', phoneNumber);
    console.log('Profile Picture:', profilePicture);
    console.log('Age:', age);
    console.log('Occupation:', occupation);
    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
    setAadhaarNumber('');
    setPhoneNumber('');
    setProfilePicture('');
    setAge('');
    setOccupation('');
  };

  return (
    <div className="registration-page">
      <h2>Registration Page</h2>
      <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Aadhaar Number:
          <input type="text" value={aadhaarNumber} onChange={(e) => setAadhaarNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Profile Picture:
          <input type="file" accept="image/*" onChange={(e) => setProfilePicture(e.target.files[0])} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Occupation:
          <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form></div>
    </div>
  );
};

export default RegistrationPage;