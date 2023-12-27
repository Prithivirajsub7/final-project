
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Thankyou from './Thankyou';


function Reservenow() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  
  const selectedDate = params.get('date');
  const selectedTime = params.get('time');
  const partySize = params.get('partySize');

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [email, setEmail] = useState('');

const [firstNameError, setFirstNameError] = useState('');
const [lastNameError, setLastNameError] = useState('');
const [phoneNumberError, setPhoneNumberError] = useState('');
const [emailError, setEmailError] = useState('');


const handleFirstNameChange = (e) => {
  setFirstName(e.target.value);
};
const handleLastNameChange = (e) => {
  setLastName(e.target.value);
};
const handlePhoneNumberChange = (e) => {
  setPhoneNumber(e.target.value);
};
const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (firstName === '') {
setFirstNameError('Please enter your first name');
  } else {
    setFirstNameError('');
  }

  if (lastName === '') {
    setLastNameError('Please enter your last name');
  } else {
    setLastNameError('');
  }

  if(phoneNumber ===''){
    setPhoneNumberError('please enter your PhoneNumber');
  }else{
    setPhoneNumberError('');
  }

  if(email ===''){
    setEmailError('please enter your email');
  }else{
    setEmailError('');
  }

 
  if (firstName !== '' && lastName !== '' && phoneNumber !== '' && email !== '') {
    window.location.href = '/Thankyou';
  }
};


  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 minutes in seconds

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
      countdownElement.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
  }, [minutes, seconds]);

  return (
   <div className='reserve-now-page'>
      <div className='complete-your-reservation-box'>
        <div className='complete-your-reservation'>COMPLETE YOUR RESERVATION</div>
        <div className='reservehead'>
          <h2>Please fill in your details:</h2>
        </div>
        <div className='row'>
          <div className='col'>
            <label>First Name:</label>
            <input
  type='text'
  id='user'
  name='fname'
  value={firstName}
  onChange={handleFirstNameChange}
  style={{ width: '80%', height: '30px' }}
/>
{firstNameError && <span className='error-message'>{firstNameError}</span>}

          </div>
          <div className='col'>
            <label>Last Name:</label>
            <input
  type='text'
  id='user'
  name='fname'
  value={lastName}
  onChange={handleLastNameChange}
  style={{ width: '80%', height: '30px' }}
/>
{lastNameError && <span className='error-message'>{lastNameError}</span>}
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <label>Phone number</label>
            <input type='phonenumber' id='fname' name='fname' 
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            style={{ width: '80%', height: '30px' }} />
            {phoneNumberError && <span className='error-message'>{phoneNumberError}</span>}

          </div>
          <div className='col'>
            <label>Email address</label>
            <input type='email' id='lname' name='lname'
              value={email}
            onChange={handleEmailChange}
            style={{ width: '80%', height: '30px' }} />
            {emailError && <span className='error-message'>{emailError}</span>}
          </div>
        </div>
          
        <button   onClick={handleSubmit}
 style={{ width: '107%', height: '40px', marginTop: '30px', backgroundColor: '#1A1A1A', color: 'white' }}>Complete Reservation</button>
      </div> 
      <div className='reservation-time-and-details-box' style={{ width: '30%', height: '370px', marginLeft: '70px', marginTop: '100px' }}>
        <div className='count-down'>Your table will be held for you for <span id="countdown">40:00</span> minutes.</div>
        <div className='reservation-details'>
          <p>Date: {selectedDate}</p>
          <p>Time: {selectedTime}</p>
          <p>Guest: {partySize}<br></br>coimbatore</p>
        </div>
      </div>
     
    </div>
   
  );
}

export default Reservenow;
