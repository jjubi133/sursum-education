import React, {Component} from 'react'

class AnswerButton extends Component{
    state={
        display: false
    }

    toggleHandler=()=> {
        const currentStatus=this.state.display;
        this.setState({
            display: !currentStatus
        })
    }
    render(){
    let content=null;
    if(this.state.display){
        content=<h2>{this.props.answer}</h2>
    }
        return(
            <div>
                <div className="answers_btngroup"><button onClick={this.toggleHandler}>Check Answer</button></div>
                <div className="answersArea"><div className="answers">{content}</div></div>
            </div>
        );
    }
}

export default AnswerButton;