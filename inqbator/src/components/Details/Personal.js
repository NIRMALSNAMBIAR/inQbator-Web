import React from 'react'
import './Personal.css'

const Personal = ({onNext}) => {
    return (
        <div className='personal__main'>
            <div className="personal">
                <div className='personal__head'>
                    <h1>Join Wishlist</h1>
                    <img src="./assets/logo.png" alt="" />
                </div>
                <p>inQbator is india’s fast growing startup founders community that works intensively with the startup in each phase of their journey.</p>
                <div className="personal__step">
                    <div className="personal__step1">
                        <p>1</p>
                        <h1>Personal Details</h1>
                    </div>
                    <div className="personal__step2">
                        <p>2</p>
                        <h1>Startup Details</h1>
                    </div>
                </div>
                <div className='personal__form'>
                    <h1>Name*</h1>
                    <input type="text" placeholder='Enter you name'/>
                    <h1>Mobile*</h1>
                    <input type="text" placeholder='Enter you mobile number'/>
                    <h1>Email*</h1>
                    <input type="email" placeholder='Enter valid email address'/>
                    <h1>LinkedIn ID (Profile URL)*</h1>
                    <input type="text" placeholder="Enter your LinkedIn Profile's link"/>
                    <div onClick={onNext} >Continue</div>
                </div>
            </div>
        </div>
    )
}

export default Personal