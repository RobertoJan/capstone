import React from 'react';
import PropTypes from 'prop-types';
import Questions from '../Questions/Questions';
import Count from '../Count/Count';
import Answers from '../Answers/Answers'
import './Quiz.scss'

function Quiz(props) {
    function renderAnswerOptions(key) {
        return (
            <Answers
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
            />
        );
        }

    Quiz.propTypes = {
        answer: PropTypes.string.isRequired,
        answerOptions: PropTypes.array.isRequired,
        question: PropTypes.string.isRequired,
        questionId: PropTypes.number.isRequired,
        questionTotal: PropTypes.number.isRequired,
        onAnswerSelected: PropTypes.func.isRequired
    };

    return (
        <div className="quiz">
            <Count
            counter={props.questionId}
            total={props.questionTotal}
            />
            <Questions content={props.question} />
            <ul className="quiz__answers">
            {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    );
    }

export default Quiz;