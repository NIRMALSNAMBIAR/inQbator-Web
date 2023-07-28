import React, { useEffect, useRef, useState } from 'react'
import './Startup.css'
import DropDown from '../miscellenius/DropDown';
import DragDrop from '../miscellenius/DragDrop';
import SelectImage from '../miscellenius/SelectImage';

const Startup = ({ onPrevious, onNext }) => {

    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedArea, setSelectedArea] = useState([]);
    const [selectedStage, setSelectedStage] = useState([]);
    const [selectedExpectation, setSelectedExpectation] = useState([]);

    const [selectedImageDivs, setSelectedImageDivs] = useState([]);

    const [legal, setLegal] = useState(false);

    return (
        <div className='startup__main'>
            <div className="startup">
                <div className='startup__head'>
                    <div>
                        <h1>
                            Join Wishlist
                        <img src="./assets/wishlist-back.png" alt="" />
                        </h1>
                    </div>
                    <img src="./assets/main-logo-right.svg" alt="" />
                </div>
                <p>inQbator is india’s fast growing startup founders community that works intensively with the startup in each phase of their journey.</p>
                <div className="startup__step">
                    {/* <div className="startup__step1">
                        <p>1</p>
                        <h1>Personal Details</h1>
                    </div>
                    <div className="startup__step2">
                        <p>2</p>
                        <h1>Startup Details</h1>
                    </div> */}
                    <img src="./assets/stepper-img.svg" alt="" />
                </div>
                <h1>Explain your Idea or Startup Ideation </h1>
                <p>Its never too late or too early to start up with us . If you are in ideating phase , We Just need the Name ,Description & Solution , The more you Share the Better we build !</p>


                <div className='startup__form'>
                    <div className='startup__formcol'>
                        <div className='startup__form-margin'>
                            <h1>Name*</h1>
                            <input type="text" placeholder='Name of you Start Up' />
                        </div>
                        <div>
                            <h1>Startup or project website?</h1>
                            <input type="text" placeholder='Startup Website Url if have one*' />
                        </div>
                    </div>
                    <div className='startup__formcol'>
                        <div className='startup__form-margin'>
                            <h1>What Other Services You Need?</h1>
                            <DropDown options={servicesOptions} selectedOptions={selectedServices} onSelect={setSelectedServices} />
                        </div>
                        <div>
                            <h1>For Which area you need Mentorship for?</h1>
                            <DropDown options={areaOptions} selectedOptions={selectedArea} onSelect={setSelectedArea} />
                        </div>
                    </div>
                    <div className='startup__formcol'>
                        <div>
                            <h1>Provide a description of your startup or project.*</h1>
                            <textarea type="text" placeholder='Provide us With Your Busness Plan , Solution , Value Proposition , target market ,& Product diffrentiation.' />
                        </div>
                    </div>
                    <div className='startup__formcol'>
                        <div>
                            <h1>Uploading Business / Financial Plan</h1>
                            <DragDrop />
                        </div>
                    </div>
                </div>
                <h1>Provide us with a few more details </h1>
                <p>Every business grows at a different pace. Help us understand where you are right now in your journey. What development stage best describes your startup or project?</p>
                <div className="startup__mid">
                    <SelectImage selected={selectedImageDivs} setSelected={setSelectedImageDivs} />
                </div>
                <div className='startup__form'>
                    <div className='startup__formcol'>
                        <div className='startup__form-margin'>
                            <h1>Stage of funding? if done</h1>
                            <DropDown options={stageOptions} selectedOptions={selectedStage} onSelect={setSelectedStage} />
                        </div>
                        <div>
                            <h1>What is your expectation from InQbator ?</h1>
                            <DropDown options={expectationOptions} selectedOptions={selectedExpectation} onSelect={setSelectedExpectation} />

                        </div>
                    </div>
                    <div className='startup__formcol'>
                        <div className='startup__form-margin'>

                            <h1>Share any other Co- Founder partners affiliated with your business concept.
                            </h1>
                            <input type="text" placeholder='Enter the name of your partner' />
                        </div>
                        <div>
                            <h1>Your Address</h1>
                            <input type="text" placeholder='Enter the your address' />
                        </div>

                    </div>
                    <div className='startup__formcol'>
                        <div className='startup__form-margin'>
                            <h1>City*</h1>
                            <input type="text" placeholder='Enter your city*' />
                        </div>
                        <div >
                            <h1>State or Province*</h1>
                            <input type="text" placeholder='Enter your state or province*' />
                        </div>
                    </div>
                    <div className='startup__formcol'>
                        <div className='startup__form-margin'>
                            <h1>Postal code*</h1>
                            <input type="text" placeholder='Enter your Postal code' />
                        </div>
                        <div >
                            <h1>Country*</h1>
                            <input type="text" placeholder='Enter your country*' />
                        </div>
                    </div>
                    <label class="container">Is your StartUp registered legally?
                        <input type="checkbox" checked={legal} onChange={(e) => setLegal(e.target.checked)} />
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div className='startup__submit'>Submit Proposal</div>
                <div className='startup__bottom-img'>
                    <img src="./assets/inQbator-text.svg" alt="" />
                </div>
            </div>
        </div >
    )
}

export default Startup


const servicesOptions = [
    'Mentorship',
    'StartUp India Registration',
    'Web & App Developement',
    'Incubation',
    'Funding and VC / Angel Pitch',
];

const areaOptions = [
    'Idea Validation',
    'Market Research  &  Analysis',
    'Funding & Finance',
    'Legal & Regulatory Compliances',
    'Team Building & HR',
    'Product Development',
    'Marketing & Sales',
    'Business Strategy',
    'Networking & Connection',
    'Technology & Security',
];
const stageOptions = [
    'No funding / Self funded',
    'Seed funded',
    'Angel funded',
    'Series A',
    'Series B',
    'Series C',
    'Series D',
    'Series D+',
];
const expectationOptions = [
    'Mentorship',
    'Investement',
    'Networking',
    'Advertising',
];


