import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import MainContent from '../components/MainContent';
// import ReCAPTCHA from 'react-google-recaptcha';
import './page-css/login-page.scss';

// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform login logic here (e.g., send login request to the server)
//     if(username === 'admin' && password === 'admin') {
//         alert('Login successful');
//         // Redirect the user to the main content page after successful login
//         // (We will implement this in the next section)
//         <MainContent/>
//     }
//     else {  
//         alert('Login failed');
//     }
//     console.log('Username:', username);
//     console.log('Password:', password);
//     // Reset the form
//     setUsername('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  // const [captchaValue, setCaptchaValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin') {
      // alert('Login successful');
      // Redirect the user to the main content page after successful login
      // (We will implement this in the next section)
      window.location.href = '/Home';
    }
    else {
      setIsCorrect(true);
    }
    // Perform login logic here

    // if (captchaValue) {
    //   console.log('Email:', email);
    //   console.log('Password:', password);
    //   // Reset form fields
    //   setEmail('');
    //   setPassword('');
    //   // setCaptchaValue('');
    // } else {
    //   alert('Please complete the CAPTCHA.');
    // }
  };

  return (
    <div className='login-page'>
      <h2>Login Page</h2>
      <div className="login-form">
        <form onSubmit={handleSubmit} >
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
          {/* <ReCAPTCHA sitekey="6Ldvj2QmAAAAADOdRdAAnlhq2QaAl5z3wdgjRXPl" domain="192.168.56.1" onChange={(value) => setCaptchaValue(value)} />
        <br /> */}
          {isCorrect && <p style={{ color: 'red' }}>Email or Password is incorrect</p>}
        <div className="buttons">
          <button type="submit">Login</button>
          <a href='/registration'>Register Yourself</a></div>
        </form></div>
    </div>
  );
};

export default LoginPage;
