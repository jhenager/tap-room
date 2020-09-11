import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      <h3>{props.brewery} - {props.beer}: {props.count}</h3>
      <p>{props.style}</p>
      <p>{props.price}</p>
      <p>{props.abv}</p>
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
};

export default Tap;