import React, { useState } from 'react';
import './PersonalStep2.css';

const PersonalStep2 = ({ onPrevious, onNext }) => {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const areaList = [
    'Gaming', 'Agriculture', 'Education', 'Consumer Goods', 'Healthcare', 'Manufacturing', 'Media & Entertainment', 'Fintech', 'Marketing & Advertisement', 'Community', 'Software & Entertainment', 'Retail', 'Insurance Tech', 'SAAS', 'Technical', 'AR / VR', 'Automobile', 'Prop Tech', 'Food Tech', 'Bio Tech', 'Hardware', 'Wealth Tech', 'E Commerce', 'Travel Tech', 'AI / ML', 'Green / Clean Tech', 'NGO', 'Transportation Tech', 'Fashion Tech', 'Sports', 'Professional Services', 'D2C', 'B2B / B2C'
  ];

  const handleChipClick = (area) => {
    if (selectedAreas.length < 5 && !selectedAreas.includes(area)) {
      setSelectedAreas((prevSelected) => [...prevSelected, area]);
    } else if (selectedAreas.length >= 5) {
      window.alert('You can select up to 5 items.');
    }
  };

  const handleChipRemove = (area) => {
    setSelectedAreas((prevSelected) => prevSelected.filter((c) => c !== area));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      const area = inputValue.trim();
      if (selectedAreas.length < 5 && !selectedAreas.includes(area)) {
        setSelectedAreas((prevSelected) => [...prevSelected, area]);
        setInputValue('');
      } else if (selectedAreas.length >= 5) {
        window.alert('You can select up to 5 items.');
      }
    }
  };

  return (
    <div className='personalStep2__main'>
      <div className="personalStep2">
        <div className='personalStep2__head'>
          <h1>Join Wishlist</h1>
          <img src="./assets/logo.png" alt="" />
        </div>
        <p>inQbator is india’s fast growing startup founders community that works intensively with the startup in each phase of their journey.</p>
        <div className="personalStep2__step">
          <div className="personalStep2__step1">
            <p>1</p>
            <h1>Personal Details</h1>
          </div>
          <div className="personalStep2__step2">
            <p>2</p>
            <h1>Startup Details</h1>
          </div>
        </div>
        <div className='personalStep2__form'>
          <h1>Let’s Build Your StartUp</h1>

          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
            placeholder="Type and press Enter to add countries"
          />

          <div className="personalStep2__chip-container">
            {selectedAreas.length > 0 && <h2>Selected Area :</h2>}

            {selectedAreas.map((area) => (
              <>
                <div key={area} className="personalStep2__chip">
                  {area}
                  <span className="personalStep2__close-icon" onClick={() => handleChipRemove(area)}>
                    &times;
                  </span>
                </div>
              </>
            ))}
          </div>
          <div className="personalStep2__area-list">
            <h2>Some top startup areas : </h2>
            {areaList.map((area) => (
              <div
                key={area}
                className={`personalStep2__chip ${selectedAreas.includes(area) ? 'disabled' : ''}`}
                onClick={() => handleChipClick(area)}
              >
                {area}
              </div>
            ))}
          </div>

          <div className='personalStep2__form-btn'>
            <div onClick={onPrevious} >Previous</div>
            <div onClick={onNext} >Continue</div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default PersonalStep2