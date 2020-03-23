import React from 'react';
import PropTypes from 'prop-types';
import './Results.scss'

function Result(props) {
  Result.propTypes = {
    quizResult: PropTypes.string.isRequired
  };
  return (
      <div className="results">
        <h3 className="results__content"> <span>{props.quizResult}</span>!</h3>
      </div>
  );
}



export default Result;