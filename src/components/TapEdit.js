import React from "react";
import PropTypes from "prop-types";

function TapEdit(props) {
  const { tap } = props;
  function handleEditingTapInList(event) {
    event.preventDefault();
    props.onEditTap({
      brewery: event.target.brewery.value,
      beer: event.target.beer.value,
      style: event.target.style.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      count: event.target.count.value,
      id: tap.id,
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleEditingTapInList}>
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

TapEdit.propTypes = {
  tap: PropTypes.object,
  onEditTap: PropTypes.func,
};

export default TapEdit;