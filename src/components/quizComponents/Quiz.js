import React from 'react';
import PropTypes from 'prop-types';
import Question from '../quizComponents/Question';
import QuestionCount from '../quizComponents/QuestionCount';
import AnswerOption from '../quizComponents/AnswerOption';
import AnswerButton from "./AnswerButton.js";

function Quiz(props) {

  function renderAnswerOptions(key,index) {
    return (
      <AnswerOption
        index ={index}
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        selectedAnswer={props.selectedAnswer}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }


  return (
    <div
			className="container"
			component="div"
			transitionName="fade"
			transitionEnterTimoeout={800}
			transitionLeaveTimeout={0}
			transitionAppear
			transitionAppearTimeout={500}
		>
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} //viewresults={props.viewresults}
          total={props.questionTotal}
        />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>

        <AnswerButton answer="hi"/>

        <div className="bottom-footer" >
          {props.counter > 0 ? (<button className="previous_button" onClick={props.setPreviousQuestion} >Previous</button>) : (<div></div>)}
          {props.counter < 2 ? (<button className="next_button" onClick={props.setNextQuestion} >Next</button>) : (<div></div>)}
        </div>
      </div>

    </div>
  );
}

Quiz.propTypes = {
	answer: PropTypes.string.isRequired,
	answerOptions: PropTypes.array.isRequired,
	counter: PropTypes.number.isRequired,
	question: PropTypes.string.isRequired,
	questionId: PropTypes.number.isRequired,
	questionTotal: PropTypes.number.isRequired,
	onAnswerSelected: PropTypes.func.isRequired
 
 
 
};
export default Quiz;