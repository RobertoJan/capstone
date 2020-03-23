import React from 'react';
import PropTypes from 'prop-types';
import './Questions.scss';

function Questions(props) {
    return (
    <h2 className="questions">{props.content}</h2>
    );
}

Questions.propTypes = {
    content: PropTypes.string.isRequired
};

export default Questions;