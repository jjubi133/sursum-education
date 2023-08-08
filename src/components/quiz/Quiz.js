import React, { Component, Fragment } from "react";

import Answer from "./Answer";
import './quiz.css';

class Quiz extends Component{

  state={
    dataQuestion:[],
  }

 setStatefunction = () =>{ 
  //  use reactjs setState 
    this.setState( {
      dataQuestion: [this.props.quizdata]
    })
  }
  componentDidMount(){
    this.setStatefunction();
  }
  render() {
    return(

      <Fragment> 
         {
          this.state.dataQuestion.map( data => {
            console.log( data);
          return <div className="quizComponent"> 
                      <h2>{data.question}</h2> 
                     <Answer rightAnswer={ data.rightAnswer} answer={ data.FindAnswer} />
                 </div>
          })
         }
      </Fragment>
    );
  }
}

export default Quiz;



