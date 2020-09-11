import React from 'react';
import Tap from './Tap';
import PropTypes from "prop-types";

function TapList(props){
  return (
    <React.Fragment>
      <hr />
      {props.tapList.map((tap, index) =>
        <Tap brewery={tap.brewery}
          beer={tap.beer}
          style={tap.style}
          price={tap.price}
          abv={tap.abv}
          count={tap.count}
          id={tap.id}
          key={index}/>
        )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default TapList;