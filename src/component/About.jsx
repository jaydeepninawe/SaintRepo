import React from 'react';
import './About.css';

function About() {
  return (
    <div className='main'>
      <div className="first">
        <img className="about-image" src="https://th.bing.com/th/id/OIP.irbC9vf6fmccvZ0k2xsZnAHaEi?w=301&h=184&c=7&r=0&o=5&dpr=1.6&pid=1.7" alt="aboutus image" />
      </div>
      <div className="second">
        <h1>About us</h1>
        <p>At our Collage Club, we're more than just scissors and glue. We're a vibrant community of artists, creators, and innovators coming together to explore the art of collage-making.</p>
        <p>Our mission is to provide a space where members can unleash their creativity, experiment with different techniques, and express themselves through the medium of collage.</p>
        <p>Whether you're a seasoned artist or just starting out, our club offers workshops, events, and collaborative projects that cater to all skill levels and interests.</p>
        <p>Come join us on this artistic journey and let your imagination run wild!</p>
      </div>
    </div>
  );
}

export default About;
