import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h3>{props.brewery} - {props.beer}: {props.count} Pints Remaining</h3>
        <p>Style: {props.style}</p>
        <p>Price: ${props.price}</p>
        <p>ABV: {props.abv}%</p>
        <button onclick={() => props.minusClick(props.id)}>Sell a beer</button>
      </div>
      
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
  minusClick: PropTypes.func,
  whenPostClicked: PropTypes.func
};

export default Tap;