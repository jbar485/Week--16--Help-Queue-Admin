import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import './Ticket.css'

function Ticket(props){
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          <h3>{props.location}</h3>
          <p>{props.formattedWaitTime} ago</p>
        </div>
        <div className='flip-card-back'>
          <h3>{props.names}</h3>
          <p><em>{props.issue}</em></p>
        </div>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired
};

export default Ticket;
