import React from 'react'
import './HomeCycle.css'
import { Link } from 'react-router-dom';

const HomeCycle = () => {
    return (
        <>
            <div class="t-section">
                <div class="container-1280-width w-container">
                    <div class="margin-bottom-64 side">
                        <div class="skill-h3-max">
                            <h2 class="t-h2-heading">How does inQbator long term<br />Mentorship Work?</h2>
                        </div>
                        <Link>
                            <div className="homecycle__headBtn">
                                <p>Select Your Mentor</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


            <div class="hiw-image">
                <img src="./assets/cycle.svg" loading="lazy" alt="" class="image-100--rel" />
            </div>
        </>
    )
}

export default HomeCycle