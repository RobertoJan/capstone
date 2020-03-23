import React from 'react';
import PropTypes from 'prop-types';
import './Count.scss';

function QuestionCount(props) {
    QuestionCount.propTypes = {
        counter: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired
    };
    return (
    <div className="count">
    <p className="count__line">Question <span>{props.counter}</span> of <span>{props.total}</span></p>
    </div>
    );
}

export default QuestionCount;