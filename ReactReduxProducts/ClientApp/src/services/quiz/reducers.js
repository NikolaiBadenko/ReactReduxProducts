import { handleActions } from 'redux-actions';
import {
    setQuizData
} from 'services/quiz/actions';

const defaultState = {
    quizTitle: '',
    quizSynopsis:'',
    questions:null,
};

export const reducer = handleActions({
    [setQuizData]: (state, action) => ({ 
        ...state,
        quizTitle: action.quizData.quizTitle,
        quizSynopsis: action.quizData.quizSynopsis,
        questions: action.quizData.questions,
    }),
}, defaultState);

// export default reducer;
