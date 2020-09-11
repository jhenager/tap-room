import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      <h3>{props.brewery} - {props.beer}</h3>
      <p>{props.style}</p>
      <p>{props.price}</p>
      <p>{props.abv}</p>
    </React.Fragment>
  )
}

Tap.propTypes = {
  brewery = PropTypes.string,
  beer = PropTypes.string,
  style = PropTypes.string,
  price = PropTypes.string,
  abv = PropTypes.string
};

export default Tap;