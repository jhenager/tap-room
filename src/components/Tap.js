import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      <h3>{props.brewery} - {props.beer}: {props.count} Pints Remaining</h3>
      <p>Style: {props.style}</p>
      <p>Price: ${props.price}</p>
      <p>ABV: {props.abv}%</p>
      <button onclick={() => props.minusClick(props.id)}>Sell a beer</button>
    </React.Fragment>
  )
}

Tap.propTypes = {
  brewery: PropTypes.string,
  beer: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  count: PropTypes.number,
  id: PropTypes.string,
  minusClick: PropTypes.func
};

export default Tap;