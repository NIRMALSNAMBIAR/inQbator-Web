import React, { useState } from 'react'
import './HomeFeedback.css'
import validator from 'validator';
import axios from 'axios';
import API_URL from '../../api/Api';

const HomeFeedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('All fields are required');
      return;
    }

    if (!validator.isEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/feedback`, { name, email, message });
      setResponseMessage(response.data.message);
      setSubmitted(response.data.success);

      // Clear form after submission
      setName('');
      setEmail('');
      setMessage('');
      // Clear response message after 5 seconds
      setTimeout(() => {
        setResponseMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setResponseMessage('Error submitting feedback. Please try again later.');
      setSubmitted(false);
    }
  };

  return (
    <div className='homefeedback__main'>
      <div className="homefeedback">
        <div className="homefeedback__left">
          <h1>Give Feedback</h1>

          <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder='Enter a valid Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea name="" cols="30" rows="10" placeholder='Your message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <div className='homefeedback__submit'>
            {submitted ? (<>
              <p>{responseMessage}</p>
            </>
            ) : (<p></p>)}

            <div type="Submit" disabled={submitting} onClick={handleSubmit}>
              <p>{submitting ? 'Submitting...' : 'Submit'}</p>
            </div>
          </div>
        </div>

        <div className="homefeedback__right">
          <img src="./assets/feedback-image.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeFeedback