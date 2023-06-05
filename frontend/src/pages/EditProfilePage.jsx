import React, { useState } from 'react';
import './page-css/edit-profile-page.scss';

const EditProfilePage = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [socialAccounts, setSocialAccounts] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform save profile logic here
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Profile Picture:', profilePicture);
    console.log('Age:', age);
    console.log('Occupation:', occupation);
    console.log('Social Accounts:', socialAccounts);
    console.log('Address:', address);
    // Reset form fields
    setName('');
    setPhoneNumber('');
    setProfilePicture('');
    setAge('');
    setOccupation('');
    setSocialAccounts('');
    setAddress('');
  };

  return (
    <div className='edit-profile-page'>
      <h2>Edit Profile</h2>
      <div className="edit-profile-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Profile Picture:
          <input type="text" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Occupation:
          <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        </label>
        <br />
        <label>
          Social Accounts:
          <input type="text" value={socialAccounts} onChange={(e) => setSocialAccounts(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form></div>
    </div>
  );
};

export default EditProfilePage;
