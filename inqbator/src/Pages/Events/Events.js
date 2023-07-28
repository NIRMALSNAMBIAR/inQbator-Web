import React from 'react'
import Navbar2 from '../../components/Navbar2'
import './Events.css'
import { EventsCard, Footer, Navbar3 } from '../../components'
const Events = () => {
  return (
    <>
      <div className="events">
      <Navbar3 />
        <div className='events__head'>
          <div>
            <h1>Level up your Career!</h1>
            <p>with live group events from top<br />mentors at inQbator</p>
          </div>
        </div>
        <div className="events__body">
          <h1>Upcoming Group Session</h1>
          <div className="events__card-container">
            <EventsCard bgColor={'#881b34'} />
            <EventsCard bgColor={'#7A58CD'} />
            <EventsCard bgColor={'#DE6C87'} />
            <EventsCard bgColor={'#DE4C87'} />
            <EventsCard bgColor={'#DE6C87'} />
            <EventsCard bgColor={'#DE6C22'} />
            <EventsCard bgColor={'#DE7C25'} />
            <EventsCard bgColor={'#DE8C57'} />
            <EventsCard bgColor={'#DE9C77'} />
          </div>
          <h1>Past Group Session</h1>
          <div className="events__card-container">
            <EventsCard bgColor={'#881b34'} />
            <EventsCard bgColor={'#7A58CD'} />
            <EventsCard bgColor={'#DE6C87'} />
            <EventsCard bgColor={'#DE4C87'} />
            <EventsCard bgColor={'#DE6C87'} />
            <EventsCard bgColor={'#DE6C22'} />
            <EventsCard bgColor={'#DE7C25'} />
            <EventsCard bgColor={'#DE8C57'} />
            <EventsCard bgColor={'#DE9C77'} />
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Events