import React from 'react';
import './App.css';

function Footer() {
  return (
    <div className="page11">
    <div className="address">ADDRESS<br></br><br></br> 

500 Terry Francine St.

San Francisco,<br></br>

CA 94158</div>
    <div className="contact">CONTACT<br></br><br></br>
    
info@mysite.com

Tel: 123-456-7890</div>
    <div className="hours">HOURS<br></br><br></br>OPEN DAILY

10AM-10PM

</div>
<div className="mailinglist">MAILING LIST
</div>
<div className='footer-email'  placeholder='enter your email here'></div>
    <button className='buttonfooter'>subscribe</button>
</div>
  )
}

export default Footer;