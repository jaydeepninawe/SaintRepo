import React from 'react';
import './Join.css';


function Join() {
  return (
    <div className='container'>
      
      <img className="image-join" src="https://images.pexels.com/photos/268415/pexels-photo-268415.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Background Image" />
      <form class="form">
      <h2>join Us !</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Join;
