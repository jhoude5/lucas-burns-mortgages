
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferred, setPreferred] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = e => {
    e.preventDefault()
    const myForm = e.target;
    const formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            document.querySelector('.success').innerText =
                "Thank you for reaching out to us, we'd get back to you shortly.";
            // Clear form fields
            setName('');
            setPhone('');
            setEmail('');
            setPreferred('');
            setMessage('');
        })
        .catch((error) => document.querySelector('.error').innerText = 'Something went wrong, pls try again.');
};
  return (
      
      
        <div className='container'>
            <div className='row'>
            <h2 className='center'>Contact Us</h2>
      <form className='contact-us-form' name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit} id="contact-form">
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="bot-field" />
                                <div className="row clearfix">
                                    <div className=" form-group">
                                        <label className='col-lg-1'>Name</label>
                                        <input  className='col-lg-11' onChange={({ target }) => setName(target.value)}
                                            type="text"
                                            required
                                            name="name"
                                            value={name}
                                            minLength="3" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label className='col-lg-1'>Phone</label>
                                        <input className='col-lg-11' type="tel"
                                            name="text"
                                            value={phone}
                                            required
                                            onChange={({ target }) => setEmail(target.value)} placeholder="Your phone number" />
                                    </div>

                                    <div className="form-group">
                                        <label className='col-lg-1'>Email</label>
                                        <input className='col-lg-11' type="email"
                                            name="email"
                                            value={email}
                                            required
                                            onChange={({ target }) => setEmail(target.value)} placeholder="Your Email" />
                                    </div>
                                    <div className=" form-group">
                                        <label className='col-lg-1'>Preferred method of contact</label>
                                        <input  className='col-lg-11' onChange={({ target }) => setName(target.value)}
                                            type="text"
                                            required
                                            name="name"
                                            value={preferred}
                                            minLength="3" placeholder="Email or phone" />
                                    </div>
                                    <div className="form-group">
                                        <label className='col-lg-1'>Message/Question</label>
                                        <textarea  className='col-lg-11' name="message" placeholder="Message" required onChange={({ target }) => setMessage(target.value)}
                                            value={message}></textarea>
                                    </div>

                                    <div className="form-group form-button">
                                        <button className="theme-btn btn-primary" type="submit">
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="success"></div>
                            <div className="error"></div>
            </div>
        </div>
        
   
    
  );
};

export default Contact;