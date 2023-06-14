import React, { useState } from 'react';
import './contact.css'
function Contact () {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (event) => {
event.preventDefault();
// Submit the form data to the server or perform validation
};

return (
<>
<h3 style={{ textAlign: "center", color: "#c4a7aa" }}>Get In Touch</h3>
<hr/>
<form className="my-form" onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="name">Name:</label>
<input
type="text"
id="name"
name="name"
value={name}
onChange={(event) => setName(event.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="email">Email:</label>
<input
type="email"
id="email"
name="email"
value={email}
onChange={(event) => setEmail(event.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="subject">Subject:</label>
<input
type="text"
id="subject"
name="subject"
value={subject}
onChange={(event) => setSubject(event.target.value)}
required
/>
</div>
<div className="form-group">
<label htmlFor="message">Message:</label>
<textarea
id="message"
name="message"
value={message}
onChange={(event) => setMessage(event.target.value)}
required
></textarea>
</div>
<button type="submit" className='btn'>Send</button>
</form>
</>
);
}

export default Contact