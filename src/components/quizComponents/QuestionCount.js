import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {

  return (
    <div className="questionCount">
      <h4>Question <span>{props.counter}</span> of <span>{props.total}</span></h4>
       {/*{props.counter === 2 ? (<a className="result-link" href="" onClick={props.viewresults}>View Results</a>) : (<div></div>)}*/}
    </div>
  );

}
QuestionCount.propTypes = {
	counter: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired
};
 

export default QuestionCount;