import React from 'react';
import PropTypes from 'prop-types';
import './Answers.scss';

function AnswerOption(props) {
    AnswerOption.propTypes = {
        answerType: PropTypes.string.isRequired,
        answerContent: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
        onAnswerSelected: PropTypes.func.isRequired
    };
    return (
    <li className="answers">
        <input
        type="radio"
        className="answers__radioButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}/>
    <label className="answers__radioLabel" htmlFor={props.answerType}>
        {props.answerContent}
    </label>
    </li>
    );
}

export default AnswerOption;