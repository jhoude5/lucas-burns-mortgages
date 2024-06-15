import React, { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
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
              setEmail('');
          })
          .catch((error) => document.querySelector('.error').innerText = 'Something went wrong, pls try again.');
        };
    return (
        <div className="subscribe">
            <div className="container">
        <div className="row">
            <div className="col-lg-6">
             <h2>Subscribe to my newsletter</h2>
            </div>
            <div className="col-lg-6">
            <form className='contact-us-form' name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit} id="contact-form">
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="bot-field" />
                                

                                    <div className="form-group">
                                        <label className='col-lg-1 visually-hidden'>Email</label>
                                        <input className='col-lg-11' type="email"
                                            name="email"
                                            value={email}
                                            required
                                            onChange={({ target }) => setEmail(target.value)} placeholder="Your Email" />
                                    </div>

                                   

                                    <div className="form-group form-button">
                                        <button className="theme-btn btn-style-one" type="submit">
                                            Subscribe
                                        </button>
                                    </div>
                                
                            </form>
                            <div className="success"></div>
                            <div className="error"></div>
            </div>
          

        </div>
      </div>
        </div>
        
    );
};

export default Newsletter;

