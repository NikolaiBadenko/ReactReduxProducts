import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Questions from 'components/quiz/questions';
import { Col, Jumbotron, Button } from 'reactstrap';

class Quiz extends PureComponent {
    static propTypes = {
        text: PropTypes.object,
        questions: PropTypes.array,
        shuffle: PropTypes.bool,
        timeLimit: PropTypes.number,
        questionLimit: PropTypes.number,
    }

    constructor(props){
        super(props);
        this.state = {
          start: false,
        }
        this.start = this.start.bind(this);
      }
    
    start = () => {
        this.setState({start: true})
    }

    shuffleQuestions = (questions) => {
        for (let i = questions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        return questions;
    }

    render() {
        const { text, questions, questionLimit, shuffle } = this.props;

        let selectedQuestions = questions;
        if(shuffle) {
            selectedQuestions = this.shuffleQuestions(questions);
        }

        if (selectedQuestions.length > questionLimit) {
            selectedQuestions = selectedQuestions.slice(0,questionLimit);
        }

        return (
            <Col sm="12" md={{ size: 6, offset: 3 }}>
            {!this.state.start &&
                <Jumbotron>
                    <h1 className="display-4">{text.quizTitle}</h1>
                    <hr className="my-2" />
                    <p className="lead">{text.quizSynopsis}</p> 
                    <p> Number of questions: {Math.min(questionLimit, questions.length)} </p>
                    <hr className="my-2" />
                    <Button color="primary" size="lg" onClick={() => this.start()}>Start Quiz</Button>
                </Jumbotron>
              }
    
              {
                this.state.start && <Questions questions={selectedQuestions} />
              }
              </Col>
        );
    }
}

export default Quiz;
