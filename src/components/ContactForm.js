import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = (e) => {
        e.preventDefault()

        if (name && email && message) {
            const serviceId = 'service_75y5w8q';
            const templateId = 'template_gwgtx2z';
            const userId = 'Id6_DT-dj7hWxDOdo';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill all fields');
        }
    }

    return(
        <form onSubmit={submit}>
            <div id='contact-form' className='container-fluid'>
                <div className='form-group row'>
                    <input
                        id="inputName" 
                        className='contact-field col-10'
                        type='text' 
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </div>
                <div className='form-group row'>
                    <input 
                        id="inputEmail" 
                        className='contact-field col-10'
                        type='email' 
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='form-group row'>
                    <textarea 
                        id="textareaMessage"
                        className='contact-field col-10 contact-message'
                        placeholder='Your inquiry'
                        value={message}
                        rows="6"
                        onChange={e => setMessage(e.target.value)}>
                    </textarea>  
                </div>


                <div className='form-group row'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                
                <span style={{ display: emailSent ? "block" : "none" }}>Thank you for your interest, Talk to you soon!</span>
            </div>
        </form>
    )
}

export default ContactForm