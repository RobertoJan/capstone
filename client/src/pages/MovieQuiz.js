import React, { Component } from 'react';
import Quiz from '../components/Quiz/Quiz';
import quizData from '../assets/Data/movieQuiz'
import Results from '../components/Results/Results'
import './MovieQuiz.scss'
import axios from 'axios'
import Movies from '../components/Movies/Movies'

export default class MovieQuiz extends Component {
    constructor(props) {
    super(props);

    this.state = {
        counter: 0,
        questionId: 1,
        question: '',
        answerOptions: [],
        answer: '',
        answersCount: {},
        result: '',
        moviesList:[]
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:8080/movies")
            .then(res => {
            const moviesList = res.data;
            this.setState ({moviesList});
            })
            .catch(() => {console.error('error');
            });
        const shuffledAnswers = quizData.map(question =>
        this.shuffleArray(question.answers)
        );
        
        this.setState({
        question: quizData[0].question,
        answerOptions: shuffledAnswers[0]
        
        });
        window.scrollTo(0, 0)
    
    }

    shuffleArray(arr) {
    var currIndex = arr.length,
    tempValue,
    randomIndex;

    while (0 !== currIndex) {
    
    randomIndex = Math.floor(Math.random() * currIndex);
    currIndex -= 1;

    tempValue = arr[currIndex];
    arr[currIndex] = arr[randomIndex];
    arr[randomIndex] = tempValue;
    }

    return arr;
    }  

    handleAnswer(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizData.length) {
    setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
    }
    }

    setUserAnswer(answer) {
    this.setState((state, props) => ({
    answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
    },
    answer: answer
    }));
    }

    setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
    counter: counter,
    questionId: questionId,
    question: quizData[counter].question,
    answerOptions: quizData[counter].answers,
    answer: ''
    });
    }

    getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
    }

    setResults(result) {
    if (result.length === 1) {
    this.setState({ result: `You should try ${result[0]}!` });
    } else {
    this.setState({ result: 'Any Movie Is A Good Choice!' });
    }
    }

    renderQuiz() {
    return (
        <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizData.length}
        onAnswerSelected={this.handleAnswer}
    />
    );}

    renderResult() {
    return <Results quizResult={this.state.result} />;
    }

    render() {
    return (
        
        <div className="movieQuiz">
            <div className="movieQuiz__content">
                <h2 className="movieQuiz__title">Which Movie Should You Watch</h2>
                {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
            <div className="movieQuiz__movies-container">
                <h2 className="movieQuiz__label">Movies</h2>
                <div className="movieQuiz__movies">
                    {this.state.moviesList.map(moviesList => <Movies key={moviesList.id} moviesList={moviesList} />)}
                </div>  
            </div>
        </div>
    );
    }
}
