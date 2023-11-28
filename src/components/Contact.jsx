import React from 'react';
const ContactUs = () => {
  return (
    <div >
       <details>
      <summary style={{color:'green'}}>CONTACT US</summary> 
      <p>
        <h2>Let's get you some help!</h2>
        <i>Call us at:</i><br/>
        1234567890<br/>
       <i> Email us at<br/></i>
        support@theproject.com<br/>
        <i> Postal address:<br/></i>
        BK Pudur, Sugunapuram East, Kuniyamuthur, Tamil Nadu 641008<br/>
      </p>
      <p>
        For further details <a href="https://gifographics.co/wp-content/uploads/2017/01/contact-us.gif">Contact us</a>.
        We look forward to hearing from you!
      </p>
      </details>
    </div>
  );
};

export default ContactUs;