import React from 'react';
import './styles/QuizTemplate.css';
import quizQuestions from './quizComponents/questions';
import Quiz from './quizComponents/Quiz';
import Result from './quizComponents/Result';

class QuizTemplate extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          counter: 0,
          questionId: 1,
          question: '',
          answerOptions: [],
          allQuestions : [],
          answer: '',
          selectedAnswers : {},
          result: '',
          answersCount: {
            correct: 0,
            incorrect: 0,
            wrong: 0
          }
        };
        this.setNextQuestion = this.setNextQuestion.bind(this);
        this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.viewresults = this.viewresults.bind(this);
      }
      
      handleAnswerSelected(e){
        var _self = this;
        var obj = _self.state.selectedAnswers;
        var index = parseInt(e.target.value);
        console.log("for selected question number " + (_self.state.counter + 1) +  " answer is " + index + " selected");
        var Qindex = (_self.state.counter )
        // create map and store all selecred answers with quiz Questions
        obj[Qindex] = index;
        _self.setState({selectedAnswers : obj})
    
      }
    
      componentWillMount() {
        this.setState({
          question: quizQuestions[0].question,
          answerOptions : quizQuestions[0].answers,
          allQuestions : quizQuestions
        });
      }
    
    
      setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
    
        this.setState({
          counter: counter,
          questionId: questionId,
          question: quizQuestions[counter].question,
          answerOptions: quizQuestions[counter].answers,
          answer: ''
        });
      }
      setPreviousQuestion() {
        const counter = this.state.counter - 1;
        const questionId = this.state.questionId - 1;
    
        this.setState({
          counter: counter,
          questionId: questionId,
          question: quizQuestions[counter].question,
          answerOptions: quizQuestions[counter].answers,
          answer: ''
        });
      }
    
      getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);
    
        return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
      }
    
      setResults(result) {
        this.setState({ result: this.state.answersCount.correct});
      }
    
      renderQuiz() {
        return (
          <Quiz viewresults={this.viewresults}
            setNextQuestion={this.setNextQuestion}
            counter={this.state.counter}
            setPreviousQuestion={this.setPreviousQuestion}
            answer={this.state.answer}
            selectedAnswer = {this.state.selectedAnswers[this.state.counter]}
            answerOptions={this.state.answerOptions}
            questionId={this.state.questionId}
            question={this.state.question}
            questionTotal={quizQuestions.length}
            onAnswerSelected = {this.handleAnswerSelected}
          />
        );
      }
    
      renderResult() {
        return (
          <Result quizResult={this.state.allQuestions} answers={this.state.selectedAnswers} />
        );
      }
      viewresults(e){
        e.preventDefault();
        this.setState({result : true})
      }
    render() {
        return (
            <div>
                {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
        )
    }
}

export default QuizTemplate;