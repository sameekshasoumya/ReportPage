import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Typewriter from 'typewriter-effect';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="https://people.iitism.ac.in/~download/video/iitism-campus-tour.mp4" autoPlay loop muted />
      <h2>Welcome to NGO Management Site</h2>
<div className='typing'>
<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Helping Lives.')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1500)
      .deleteChars(6)
      .typeString('Nation Grow.')
      .pauseFor(1500)
      .deleteChars(12)
      .typeString('Lives.')
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
</div>
<div class='bottom-text'><h3>IIT (ISM) Dhanbad</h3></div>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GIVE HELP
        </Button> */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
           GIVE HELP <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
