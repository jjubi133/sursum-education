import React from 'react';
import '../styles/QuizTemplate.css';

function AnswerOption(props) {

  return (
    <li className="answerOption"> 
      <input type="radio" class="radio_item" value="" name="item" id="radio1"></input>
      <label class="label_item" for="radio1">{props.answerContent}</label>
    </li>
  )
}
export default AnswerOption;