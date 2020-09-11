import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTapForm(props){

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({
      brewery: event.target.brewery.value, 
      beer: event.target.beer.value,
      style: event.target.style.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      id: v4(),
      count: 142 })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTapFormSubmission}>
        <input
          type="text"
          name="brewery"
          placeholder="Brewery" />
        <input
          type="text"
          name="beer"
          placeholder="Name of Beer" />
        <input
          type="text"
          name="style"
          placeholder="Style of Beer" />
        <input
          type="text"
          name="price"
          placeholder="Price $" />
        <input
          type="text"
          name="abv"
          placeholder="ABV %" />
          <button type="submit">Add Tap</button>
      </form>
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;