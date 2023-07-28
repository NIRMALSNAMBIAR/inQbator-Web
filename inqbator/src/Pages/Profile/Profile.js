import React from 'react'
import Navbar3 from '../../components/Navbar/Navbar3'
import './Profile.css'

const Profile = () => {
    return (
        <>
            <div className='profile__container'>
                <div className='profile'>
                    <Navbar3 />
                    <div className="profile__body">
                        <div className='profile_main'>
                            <div className="profile__main-top">
                                <div className="profile__main-top-left">
                                    <img src="../assets/profile-img.jpg" alt="" />
                                </div>
                                <div className="profile__main-top-right">
                                    <div class="profile__main-top-right1">
                                        <h3>LONG TERM MENTORSHIP WITH</h3>
                                        <h1>Akshay Kumar</h1>
                                        <div class="profile__main-top-company">
                                            <h1>Software Engineer I</h1>
                                            <div>
                                                <img src="./assets/mentorcard-company.png" alt="" />
                                                <span>MICROSOFT</span>
                                            </div>
                                        </div>
                                        <p>Join Prince Kumar Singh's 1:1 mentorship program to take your career to next level and get into your dream job. </p>
                                    </div>
                                    <div class="profile__main-top-right2">
                                        <div>
                                            <div>
                                                <img src="./assets/mentorcard-bag.svg" alt="" />
                                                <span>6+</span>
                                            </div>
                                            <p>YEARS OF EXPERIENCE</p>
                                        </div>
                                        <div>
                                            <div>
                                                <img src="./assets/mentorcard-star.svg" alt="" />
                                                <span>5.0</span>
                                            </div>
                                            <p>MENTOR'S RATING</p>
                                        </div>
                                        <div>
                                            <div>
                                                <img src="./assets/mentorcard-stream.svg" alt="" />
                                                <span>4+</span>
                                            </div>
                                            <p>LIVE SESSIONS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile__main-bottom">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile