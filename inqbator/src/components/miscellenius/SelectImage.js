import React, { useState } from 'react';
import './css/SelectImage.css';

const SelectImage = ({selected, setSelected}) => {

    const handleDivClick = (heading) => {
        setSelected((prevSelected) =>
            prevSelected.includes(heading)
                ? prevSelected.filter((divHeading) => divHeading !== heading)
                : [...prevSelected, heading]
        );
    };

    return (
        <>
            {/* div 1 */}
            <div
                className={`startup__min-img ${selected.includes('Div 1') ? 'selected' : ''}`}
                onClick={() => handleDivClick('Div 1')}
            >
                <div>
                    <img src="./assets/mentor-form1.svg" alt="" />
                </div>
                <p>Ideation and validity</p>
            </div>

            {/* div 2 */}
            <div
                className={`startup__min-img ${selected.includes('Div 2') ? 'selected' : ''}`}
                onClick={() => handleDivClick('Div 2')}
            >
                <div>
                    <img src="./assets/mentor-form2.svg" alt="" />
                </div>
                <p>Started implementing</p>
            </div>

            {/* div 3 */}
            <div
                className={`startup__min-img ${selected.includes('Div 3') ? 'selected' : ''}`}
                onClick={() => handleDivClick('Div 3')}
            >
                <div>
                    <img className='startup__min-img-size' src="./assets/mentor-form3.svg" alt="" />
                </div>
                <p>Building MVP</p>
            </div>

            {/* div 4 */}
            <div
                className={`startup__min-img ${selected.includes('Div 4') ? 'selected' : ''}`}
                onClick={() => handleDivClick('Div 4')}
            >
                <div>
                    <img className='startup__min-img-size' src="./assets/mentor-form4.svg" alt="" />
                </div>
                <p>Ready MVP</p>
            </div>

            {/* div 5 */}
            <div
                className={`startup__min-img ${selected.includes('Div 5') ? 'selected' : ''}`}
                onClick={() => handleDivClick('Div 5')}
            >
                <div>
                    <img src="./assets/mentor-form5.svg" alt="" />
                </div>
                <p>MVP in Market</p>
            </div>

            {/* div 6 */}
            <div
                className={`startup__min-img ${selected.includes('Div 6') ? 'selected' : ''}`}
                onClick={() => handleDivClick('Div 6')}
            >
                <div>
                    <img className='startup__min-img-size' src="./assets/mentor-form6.svg" alt="" />
                </div>
                <p>Established in Market</p>
            </div>
        </>
    )
}

export default SelectImage