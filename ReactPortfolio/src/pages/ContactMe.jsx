import './styles/ContactMe.css';
import { useState } from 'react';

export default function ContactMe() {
  const [isLoading, setIsLoading] = useState(false);

  function handleSub() {
    setIsLoading(true); 
  }

  return (
    <div className='contact'>
      <h2>Contact Me</h2>
      <div className="form-container">
        <form action="https://formsubmit.co/romero.chrisprof@gmail.com" method="POST" onSubmit={handleSub} >
          <input type="text" name="name" id="name" className='form-control' placeholder="Name" required />
          <input type="email" name="email" id="email" className='form-control'  placeholder="Email Address" required />
          <textarea name="textarea" id="textarea" className='form-control' rows="16" maxLength={1000} placeholder="Introduce yourself and show your interest..." required ></textarea>
          <button type="submit" className='btn btn-dark' disabled={isLoading}>{isLoading ? 'Sending...' : 'Submit'}</button>
        </form>
      </div>
    </div>
  );
}