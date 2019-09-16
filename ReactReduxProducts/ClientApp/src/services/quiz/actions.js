import { createAction } from 'redux-actions';

export const getQuizData = createAction('QUIZ.GET_QUIZ_DATA');
export const setQuizData = createAction('QUIZ.SET_QUIZ_DATA', quizData => ({ quizData }));
