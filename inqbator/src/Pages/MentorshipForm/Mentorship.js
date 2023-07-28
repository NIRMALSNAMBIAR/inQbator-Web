import React, { useState } from 'react'
import './Mentorship.css';
import { Personal, PersonalStep2, Startup } from '../../components';

const Mentorship = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (<>
    <div className='mentorship__main'>
      <div className='mentorship'>
        <div className='mentorship__left'>
          <div className="mentorship__left-main">
            <h1>GROW<br/>YOUR STARTUP<br/>WITH US!</h1>
            <img src="./assets/mentorFormImg.svg" alt="" loading='lazy'/>
          </div>
        </div>
        {activeStep === 1 && <Personal onNext={handleNext} />}
        {activeStep === 2 && <PersonalStep2 onNext={handleNext} onPrevious={handlePrevious} />}
      </div>
      <div className='mentorship__startup'>
        {activeStep === 3 && <Startup onPrevious={handlePrevious} />}
      </div>
    </div>
  </>
  )
}

export default Mentorship

