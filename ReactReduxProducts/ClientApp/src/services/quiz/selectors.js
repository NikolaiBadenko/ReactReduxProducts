export const getQuizQuestions = state => {
    return state.quiz.questions;
}

export const getQuizText = state => {
    return {
        quizTitle: state.quiz.quizTitle,
        quizSynopsis: state.quiz.quizSynopsis,
    };
}
