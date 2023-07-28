import React from 'react'
import './Cycle.css';

const Cycle = () => {
    return (<>
            <div className="cycle__1 ">
                <div>
                    <div className='cycle__purple-box'>
                        <img src="./assets/group-cycle.png" alt="" />
                    </div>
                    <div className='cycle__1-head'>
                        <h1>Start Up<br />Community</h1>
                    </div>
                    <p>1</p>
                </div>
                <img className="cycle__wave1" src="./assets/wave1-cycle.png" alt="" />
            </div>
            <div className="cycle__2" >
                <div>
                    <div className='cycle__purple-box'>
                        <img src="./assets/plane.png" alt="" />
                    </div>
                    <div className='cycle__2-head'>
                        <h1>Free Trial Session</h1>
                    </div>
                    <p>2</p>
                </div>
            </div>
            <div className="cycle__3">
                <div>
                    <div className='cycle__purple-box'>
                        <img src="./assets/cube.png" alt="" />
                    </div>
                    <div className='cycle__2-head'>
                        <h1>Start Long Term Mentorship</h1>
                    </div>
                    <p>3</p>
                </div>
            </div>
            <div className="cycle__4">
                <div>
                    <div className='cycle__purple-box'>
                        <img src="./assets/doc.png" alt="" />
                    </div>
                    <div className='cycle__4-head'>
                        <h1>Business Plan</h1>
                        <p>Mentors Help in developing a comprehensive and effective roadmap for your business. We offer valuable insights, industry knowledge, and critical feedback to refine the business strategy, identify potential challenges, and capitalize on opportunities and create a well-structured plan </p>
                    </div>
                    <p>4</p>
                </div>
                <div className="cycle__6">
                    <div>
                        <div className='cycle__purple-box'>
                            <img src="./assets/tick.png" alt="" />
                        </div>
                        <div className='cycle__6-head'>
                            <h1>Idea Validation</h1>
                            <p>Validate your idea with  mentor and suggestions to fix your loop hole & strategy</p>
                        </div>
                        <p>6</p>
                    </div>
                </div>
                <img className="cycle__eclipse" src="./assets/eclipse.png" alt="" />
            </div>

            <div className="cycle__5">
                <div>
                    <div className='cycle__purple-box'>
                        <img src="./assets/diary.png" alt="" />
                    </div>
                    <div className='cycle__5-head'>
                        <h1>Market Research</h1>
                        <p>Mentors Help  in identifying your target market, understanding customer need and Preference , analysing market trends and competition . </p>
                    </div>
                    <p>5</p>
                </div>
                <img className="cycle__wave2" src="./assets/wave2-cycle.png" alt="" />
            </div>
            <div className="cycle__7">
                <div>
                    <div className='cycle__purple-box'>
                        <img src="./assets/bag.png" alt="" />
                    </div>
                    <div className='cycle__7-head'>
                        <h1>Product For Market Fit</h1>
                        <p>Mentors helps to understand their target audience's pain points, preferences, and behaviours. Helps product or service offerings to better meet customer needs, iterating on features, and validating these changes through user feedback and data analysis.</p>
                    </div>
                    <p>7</p>
                </div>
            </div>

            <div className="cycle__8">
                <div>
                    <div className='cycle__purple-box'>
                        <img src="./assets/money-hand.png" alt="" />
                    </div>
                    <div className='cycle__8-head'>
                        <h1>Funding</h1>
                        <p>Mentor helps in funding by refining the business plan, coaching on pitching and presentation, providing a network and introductions to investors, offering feedback and validation, sharing investor insights, preparing for due diligence, advising on negotiation and terms, boosting credibility, potentially investing themselves, and providing post-funding support. Their guidance and connections increase the startup's chances of securing funding successfully.</p>
                    </div>
                    <p>8</p>
                </div>
                <div className="cycle__9">
                    <div className='cycle__9'>
                        <div className='cycle__9-head'>
                            <h1>Unicorn</h1>
                        </div>
                        <div className='cycle__purple-box-unicorn'>
                            <img src="./assets/unicorn.png" alt="" />
                        </div>
                        <p>END</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cycle