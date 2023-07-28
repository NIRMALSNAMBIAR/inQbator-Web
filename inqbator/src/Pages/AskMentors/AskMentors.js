import React, { useState } from 'react'
import Navbar2 from '../../components/Navbar2'
import './AskMentors.css'
import CommentCard from '../../components/AskMentors/CommentCard'
import Footer from '../../components/Footer/Footer'
import Navbar3 from '../../components/Navbar/Navbar3'

const AskMentors = () => {
  const [filter, setFilter] = useState('All');
  return (
    <>
      <div className="askmentors">

        <div className='askmentors__head'>
          <Navbar3 />
          <div className='askmentors__head-div'>
            <h1>Get Accurate Insights from <br />Verified industry Experts !</h1>
            <p>Get your career queries clarified by top<br />industry experts from your domain</p>
          </div>
        </div>
        <div className='askmentors__cbox-main'>
          <div className="askmentors__cbox">
            <div className="askmentors__cbox-top">
              <div className='askmentors__cbox-img'>
                <img src="./assets/profile-img.jpg" alt="" />
              </div>
              <div className='askmentors__cbox-input'>
                <input type="text" placeholder='What do you want to ask?' />
              </div>
            </div>
            <div className="askmentors__cbox-bottom">
              <div><img src="./assets/askmentors-chat.svg" alt="" /></div>
              <h1>Ask a Question</h1>
            </div>
          </div>
          <div className="askmentors__body">
            <div className="askmentors__sidebar">
              <div className="askmentors__sidebar-input">
                <img src="./assets/search.svg" alt="" />
                <input type="text" placeholder='Search...' />
              </div>
              <div className='askmentors__sidebar-filter'>
                <h1>Filter Questions by Domain</h1>
                <div className='askmentors__sidebar-filter-scroll'>
                  {filterOptions?.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setFilter(item.title)}
                      className={`askmentors__sidebar-filter-scroll__option ${filter === item.title ? 'selected' : ''}`}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>

            </div>
            <div className="askmentors__comments">
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AskMentors

const filterOptions = [
  { id: 1, title: 'All' },
  { id: 2, title: 'Fin Tech' },
  { id: 3, title: 'Ed Tech' },
  { id: 4, title: 'SAAS' },
  { id: 5, title: 'Tech' },
  { id: 6, title: 'Automobile' },
  { id: 7, title: 'Proptech' },
  { id: 8, title: 'BioTech' },
  { id: 9, title: 'Health Tech' },
  { id: 10, title: 'Food Tech' },
  { id: 11, title: 'Agriculture' },
  { id: 12, title: 'Game' },
  { id: 13, title: 'Hardware' },
  { id: 14, title: 'Wealth Tech' },
  { id: 15, title: 'Insurance Tech' },
  { id: 16, title: 'E-commerce' },
  { id: 17, title: 'Travel Tech' },
  { id: 18, title: 'AI/ML' },
  { id: 19, title: 'Green/Clean Tech' },
  { id: 20, title: 'Transportation Tech' },
  { id: 21, title: 'NGO' },
  { id: 22, title: 'Fashion Tech' },
  { id: 23, title: 'Marketing/Media' },
  { id: 24, title: 'Sports' },
  { id: 25, title: 'Manufacturing' },
  { id: 26, title: 'B2B' },
  { id: 27, title: 'B2C' },
  { id: 28, title: 'D2C' },
];