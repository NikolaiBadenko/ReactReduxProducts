import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    getQuizQuestions as getQuizQuestionsSelector,
    getQuizText as getQuizTextSelector,
} from 'services/quiz/selectors';
import {
    getQuizData,
} from 'services/quiz/actions';
import Quiz from 'components/quiz/quiz';

class QuizPage extends PureComponent {
    static propTypes = {
        questions: PropTypes.array,
        getQuizData: PropTypes.func,
    }

    componentDidMount() {
        this.props.getQuizData();
    }

    render() {
        const { questions, text } = this.props;
        return (
            questions && text && <Quiz
                text={text}
                questions={questions}
                shuffle={true}
                timeLimit={1}
                questionLimit={3}
            />
        );
    }
}

const mapStateToProps = state => ({
    questions: getQuizQuestionsSelector(state),
    text: getQuizTextSelector(state),
});

const mapDispatchToProps = dispatch => ({
    getQuizData: () => {
        dispatch(getQuizData());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
