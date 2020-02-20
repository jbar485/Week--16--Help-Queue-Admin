import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  var NewTicketFormStyles = {
    textAlign: "center",
    backgroundColor: "",
    margin: "20px",
    padding: "20px",
  }

  var inputStyles = {
    textAlign: "center",
    margin: "20px",
    padding: "20px",
    border: "2px solid black",
    height: "15px",
    width: "150px",
  }

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div style = {NewTicketFormStyles}>
       <form onSubmit={handleNewTicketFormSubmission}>
        <input style = {inputStyles}
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input style = {inputStyles}
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea style = {inputStyles}
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}
NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
