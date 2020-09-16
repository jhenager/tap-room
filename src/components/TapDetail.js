import React from "react";
import PropTypes from "prop-types";

function TapDetail(props) {
  const { tap, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{tap.beer}</h1>
      <h3>{tap.brewery}</h3>
      <p>{tap.style}</p>
      <p>{tap.price}</p>
      <p>{tap.abv}</p>
      <p>{tap.count}</p>
      
      <button onClick={props.onClickingEdit}>Update tap</button>
      <button variant="danger" onClick={() => onClickingDelete(tap.id)}>Delete tap</button>
      <hr />
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TapDetail;

