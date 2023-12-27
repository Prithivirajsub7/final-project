import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const YourComponent = () => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div>
      <div className="dropdown">
        <label htmlFor="time">Time</label>
        <br />
        <select
          id="time"
          name="time"
          value={selectedTime}
          onChange={handleTimeChange}
          style={{ padding: '8px 100px', textAlign: 'left' }}
        >
          <option value="8.00 AM">8.00 AM</option>
          <option value="8.15 AM">8.15 AM</option>
            <option value="8.30 AM">8.30 AM</option>
            <option value="8.45 AM">8.45 AM</option>
            <option value="9.00 AM">9.00 AM</option>
            <option value="9.15 AM">9.15 AM</option>
            <option value="9.30 AM">9.30 AM</option>
            <option value="9.45 AM">9.45 AM</option>
            <option value="10.00 AM">10.00 AM</option>
            <option value="10.15 AM">10.15 AM</option>
            <option value="10.30 AM">10.30 AM</option>
            <option value="10.45 AM">10.45 AM</option>
            <option value="11.00 AM">11.00 AM</option>
            <option value="11.15 AM">11.15 AM</option>
            <option value="11.30 AM">11.30 AM</option>
            <option value="11.45 AM">11.45 AM</option>
            <option value="12.00 PM">12.00 PM</option>
            <option value="12.15 PM">12.15 PM</option>
            <option value="12.30 PM">12.30 PM</option>
            <option value="12.45 PM">12.45 PM</option>
            <option value="1.00 PM">1.00 PM</option>
            <option value="1.15 PM">1.15 PM</option>
            <option value="1.30 PM">1.30 PM</option>
            <option value="1.45 PM">1.45 PM</option>
            <option value="2.00 PM">2.00 PM</option>
            <option value="2.15 PM">2.15 PM</option>
            <option value="2.30 PM">2.30 PM</option>
            <option value="2.45 PM">2.45 PM</option>
            <option value="3.00 PM">3.00 PM</option>
            <option value="3.15 PM">3.15 PM</option>
            <option value="3.30 PM">3.30 PM</option>
            <option value="3.45 PM">3.45 PM</option>
            <option value="4.00 PM">4.00 PM</option>
            <option value="4.15 PM">4.15 PM</option>
            <option value="4.30 PM">4.30 PM</option>
            <option value="4.45 PM">4.45 PM</option>
            <option value="5.00 PM">5.00 PM</option>
            <option value="5.15 PM">5.15 PM</option>
            <option value="5.30 PM">5.30 PM</option>
            <option value="5.45 PM">5.45 PM</option>
          <option value="5.45 PM">5.45 PM</option>
        </select>
      </div>
      <div style={{ height: '0.5px', width: '60%', backgroundColor: '#1A1A1A', margin: '0 auto', marginTop: '40px' }}></div>
      <div style={{ padding: '8px 100px', marginTop: '30px', marginLeft: '200px' }}>choose an available time slot:</div>
      <div className="reservation-button">
        <Button
          variant={selectedTime === '8.00 AM' ? 'primary' : 'secondary'}
          style={{ width: '10%', height: '40px', marginLeft: '300px', marginTop: '10px' }}
        >
          8.00 AM
        </Button>
        <Button
          variant={selectedTime === '8.15 AM' ? 'primary' : 'secondary'}
          style={{ width: '10%', height: '40px', marginLeft: '300px', marginTop: '10px' }}
        >
          8.15 AM
        </Button>
        <Button
          variant={selectedTime === '8.30 AM' ? 'primary' : 'secondary'}
          style={{ width: '10%', height: '40px', marginLeft: '300px', marginTop: '10px' }}
        >
          8.30 AM
        </Button>
        <Button
          variant={selectedTime === '8.45 AM' ? 'primary' : 'secondary'}
          style={{ width: '10%', height: '40px', marginLeft: '300px', marginTop: '10px' }}
        >
          8.45 AM
        </Button>
        <Button
          variant={selectedTime === '9.00 AM' ? 'primary' : 'secondary'}
          style={{ width: '10%', height: '40px', marginLeft: '300px', marginTop: '10px' }}
        >
          9.00 AM
        </Button>
        <Button
          variant={selectedTime === '9.15 PM' ? 'primary' : 'secondary'}
          style={{ width: '10%', height: '40px', marginLeft: '5px' }}
        >
          9.15 PM
        </Button>
      </div>
    </div>
  );
};

export default YourComponent;
