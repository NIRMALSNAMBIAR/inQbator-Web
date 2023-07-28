import React from 'react'
import './HomeSuccess.css'

const HomeSuccess = () => {
    return (
        <div className='homesuccess__main'>
            <h1>We have removed obstacles<br />that can come in the way of<br />your success</h1>
            <div className='homesuccess__foot'>
                <div className="homesuccess_img">
                    <div>
                        <img src="./assets/3man.png" alt="" />
                    </div>
                    <h1>Mentorship Access?</h1>
                    <p>Mentorship As much as you need!</p>
                </div>
                <div className="homesuccess_img">
                    <div>
                        <img src="./assets/calender.png" alt="" />
                    </div>
                    <h1>Duration?</h1>
                    <p>Till you get funding . Your pace decides your timeline.</p>
                </div>
                <div className="homesuccess_img">
                    <div>
                        <img src="./assets/watch.png" alt="" />
                    </div>
                    <h1>Timing?</h1>
                    <p>Completely Flexible As per your & mentor’s availability.</p>
                </div>
                <div className="homesuccess_img">
                    <div>
                        <img src="./assets/wallet.png" alt="" />
                    </div>
                    <h1>Pricing?</h1>
                    <p>Completely Flexible As per your & mentor’s availability.</p>
                </div>
               <div className='homesuccess__wave'>
                <img src="./assets/wave-success.png" alt="" />
               </div>
            </div>
        </div>
    )
}

export default HomeSuccess