import React from 'react';

function NewTicketForm(){
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

  return (
    <div style = {NewTicketFormStyles}>
      <form>
        <input style = {inputStyles}
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input style = {inputStyles}
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea style = {inputStyles}
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
