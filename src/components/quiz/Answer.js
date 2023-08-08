import React, { Component, Fragment } from "react";

class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        Answers: this.props.answer,
        rightAnswer: this.props.rightAnswer,
        answered: false,
        selectedOption: ""
    };
    this.onOptionClicked = this.onOptionClicked.bind(this);
    this.isCorrect = this.isCorrect.bind(this);
  }
//  create state
  
  onOptionClicked(option) {
    this.setState( {
      answered: true,
      selectedOption: option
    })
  };

  isCorrect(option){
    return option === this.state.rightAnswer;
  };
  
  render() {
   
    return (
     
      <Fragment>
        <div>
          {this.state.Answers.map((ans, index) => {
            return (
              <button 
                key={index}
                onClick={() => this.onOptionClicked(ans)}
                disabled={this.state.answered && !this.isCorrect(ans)}
                class={`question-option 
                ${this.state.answered && this.isCorrect(ans) && "correct"}
                ${this.state.selectedOption === ans && !this.isCorrect(ans) && "wrong"}
                `}
              >
                <span>
                  {this.state.answered ? (this.isCorrect(ans) ? "✔" : "X"): (index+1)}
                </span>
                <p>{ans}</p>
              </button>
            );
          }) 
          }
        </div>
      </Fragment>
   
    );
  }
}

export default Answer;



