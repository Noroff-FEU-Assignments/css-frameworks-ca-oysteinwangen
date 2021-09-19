import React from "react";

function ContactInfo() {
  return (
    <div className="mt-5">
      <div className="mb-4 d-flex contact-detail">
        <img className="contact-detail__icon" src="images/icons/mail.svg" />
        <p>hello@yay.com</p>
      </div>
      <div className="mb-4 d-flex contact-detail">
        <img
          className="contact-detail__icon"
          src="images/icons/phone-call.svg"
        />
        <p>123 456 7890</p>
      </div>
      <div className="mb-4 d-flex contact-detail">
        <img
          className="contact-detail__icon"
          src="images/icons/location-pin.svg"
        />
        <div>
          <div>123 Some Street</div>
          <div>Somewhere</div>
          <div>Some City</div>
          <div>10000</div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
