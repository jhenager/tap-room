import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      
        <h3>{props.brewery} - {props.beer}: {props.count} Pints Remaining</h3>
        <p>{props.style}</p>
        <button onClick={() => props.whenTapClicked(props.id)}>Beer Details</button>
        <button onClick={() => props.minusClick(props.id)}>Sell a beer</button>
      
      
    </React.Fragment>
  )
}

Tap.propTypes = {
  brewery: PropTypes.string,
  beer: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  count: PropTypes.number,
  id: PropTypes.string,
  minusClick: PropTypes.func,
  whenTapClicked: PropTypes.func
};

export default Tap;