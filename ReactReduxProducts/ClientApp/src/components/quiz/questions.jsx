import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col, Jumbotron, Button, CustomInput, Form, FormGroup } from 'reactstrap';

class Questions extends PureComponent {
    static propTypes = {
        questions: PropTypes.array,
        timeLimit: PropTypes.number,
    }

    constructor(props){
        super(props);
        this.state = {
          currQuestionNumber: 0,
        }
        this.next = this.next.bind(this);
      }
    
    next = () => {
        this.setState({currQuestionNumber: this.state.currQuestionNumber + 1})
    }

    render() {
        const question = this.props.questions[this.state.currQuestionNumber];

        return (
            <Jumbotron>
                <h1 className="display-4">{question.question}</h1>
                <hr className="my-2" />
                <Form>
                    <FormGroup>
                        {question.answers.forEach((answer, index) => (
                            <CustomInput type="checkbox" id={index} label={answer} />     
                        ))}
                    </FormGroup>
                </Form>
                <hr className="my-2" />
                <Button color="primary" size="lg" onClick={() => this.next()}>Start Quiz</Button>
            </Jumbotron>
        );
    }
}

export default Questions;
