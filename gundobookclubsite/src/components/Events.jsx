import React from 'react';

const Events = () => {
  console.log('Events component rendered');
  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <iframe
        src="https://lu.ma/embed/calendar/cal-Gi0sBHxIOJxkI55/events?"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default Events;