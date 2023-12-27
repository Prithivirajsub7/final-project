import { blue } from '@mui/material/colors';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

  
function Reservation() {
  const [partySize, setPartySize] = useState(''); 
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isReadyToReserve, setIsReadyToReserve] = useState(false);
  


  useEffect(() => {
    // Check if all fields are filled in
    if (partySize && selectedDate && selectedTime) {
      setIsReadyToReserve(true);
    } else {
      setIsReadyToReserve(false);
    }
  }, [partySize, selectedDate, selectedTime]);

  // Rest of your component remains unchanged

  const handlePartySizeChange = (e) => {
    setPartySize(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  
  const isButtonSelected = (buttonTime) => {
    return selectedTime === buttonTime ? 'rgb(249, 219, 121)' : '';
  };
  
  return (
    <div className="reservation-page">
      <div className="make-a-reservation">MAKE A RESERVATION</div>
      <div className="to-help-us" style={{textAlign:"center"}}>
        To help us find the best table for you, select the preferred party size, date, and time of your reservation.
      </div>
      <div className="row-dropdowns" style={{display:"flex" ,flexDirection:"row",justifyContent:"center",gap:"28px"}}>
                
        <div className="dropdown">
          <label htmlFor="partySize">Party Size</label>
          <br></br>
          <select
            id="partySize"
            name="partySize"
            value={partySize}
            onChange={handlePartySizeChange}
            style={{padding:"8px 100px",border:"1px solid "}}
          >
            <option value="1 Person">1 Person</option>
            <option value="2 Persons">2 Persons</option>
            <option value="3 Persons">3 Persons</option>
            <option value="4 Persons">4 Persons</option>
            <option value="5 Persons">5 Persons</option>
          </select>
        </div>
        <div className="dropdown">
  <label htmlFor="date">Date:</label>
  <br />
  <input
    type="date"
    id="date"
    name="date"
    value={selectedDate}
    onChange={handleDateChange}
    style={{ padding: "8px 90px" }}
  />
</div>

        <div className="dropdown">
          <label htmlFor="time">Time</label>
          <br></br>
          <select
            id="time"
            name="time"
            value={selectedTime}
            onChange={handleTimeChange}
            style={{padding:"8px 100px",textAlign:"left"}}
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

            
          </select>
        </div> 
      </div>
      <div style={{height:"0.5px",width:"60%",backgroundColor:" #1A1A1A",margin:"0 auto",marginTop:"40px"}}></div>
      <div style={{padding:"8px 100px",marginTop:"30px",marginLeft:"200px"}}>choose an available time slot:</div>
      <div className='reservation-button'> 

    
      
      <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "300px", marginTop: "10px", backgroundColor: isButtonSelected('8.00 AM') }}
        onClick={() => setSelectedTime('8.00 AM')}
      >
        8.00 AM
      </Button>{' '}
      
      <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "5px", backgroundColor: isButtonSelected('8.15 AM') }}
        onClick={() => setSelectedTime('8.15 AM')}
      >
        8.15 AM
      </Button>{' '}
       
      <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "5px", backgroundColor: isButtonSelected('8.30 AM') }}
        onClick={() => setSelectedTime('8.30 AM')}
      >
        8.30 AM
      </Button>{' '}
       
      <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "5px", backgroundColor: isButtonSelected('8.45 AM') }}
        onClick={() => setSelectedTime('8.45 AM')}
      >
        8.45 AM
      </Button>{' '}
       
      <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "5px", backgroundColor: isButtonSelected('9.00 AM') }}
        onClick={() => setSelectedTime('9.00 AM')}
      >
        9.00 AM
      </Button>{' '}
       
          
          <br></br>
          <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "300px", marginTop: "10px", backgroundColor: isButtonSelected('9.15 AM') }}
        onClick={() => setSelectedTime('9.15 AM')}
      >
        9.15 AM
      </Button>{' '}      
        
      <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "5px", backgroundColor: isButtonSelected('9.30 AM') }}
        onClick={() => setSelectedTime('9.30 AM')}
      >
        9.30 AM
      </Button>{' '}
        
      <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "5px", backgroundColor: isButtonSelected('9.45 AM') }}
        onClick={() => setSelectedTime('9.45 AM')}
      >
        9.45 AM
      </Button>{' '}
        
      <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "5px", backgroundColor: isButtonSelected('10.00 AM') }}
        onClick={() => setSelectedTime('10.00 AM')}
      >
        10.00 AM
      </Button>{' '}
        
      <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "5px", backgroundColor: isButtonSelected('10.15 AM') }}
        onClick={() => setSelectedTime('10.15 AM')}
      >
        10.15 AM
      </Button>{' '}   

          <br></br>
          
      <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "300px", marginTop: "10px", backgroundColor: isButtonSelected('10.30 AM') }}
        onClick={() => setSelectedTime('10.30 AM')}
      >
        10.30 AM
      </Button>{' '}
          
      <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "5px", backgroundColor: isButtonSelected('10.45 AM') }}
        onClick={() => setSelectedTime('10.45 AM')}
      >
        10.45 AM
      </Button>{' '}     <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "5px", backgroundColor: isButtonSelected('11.00 AM') }}
        onClick={() => setSelectedTime('11.00 AM')}
      >
        11.00 AM
      </Button>{' '}     <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "5px", backgroundColor: isButtonSelected('11.15 AM') }}
        onClick={() => setSelectedTime('11.15 AM')}
      >
        11.15 AM
      </Button>{' '}     <Button
        variant="primary"
        style={{ width: "10%", height: "40px", marginLeft: "5px", backgroundColor: isButtonSelected('11.30 AM') }}
        onClick={() => setSelectedTime('11.30 AM')}
      >
        11.30 AM
      </Button>{' '}   
          <br></br>

</div>
<button className={`reserve-now ${isReadyToReserve ? 'highlight' : ''}`}>
        <Link
          to={`/Reservenow?date=${selectedDate}&time=${selectedTime}&partySize=${partySize}`}
        >
          Reserve Now
        </Link>
      </button>
    </div>
  );
}

export default Reservation;
