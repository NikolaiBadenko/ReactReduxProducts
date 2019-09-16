import { put, takeEvery } from 'redux-saga/effects';
import {
    getQuizData,
    setQuizData,
} from 'services/quiz/actions';

function* getQuizDataSaga() {
    try {
        const url = 'api/QuizApi/GetQuizData';
        const quizData = yield fetch(url).then(response => response.json(), );
        yield put({type: setQuizData, quizData: quizData});
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* quizSaga() {
    yield takeEvery(getQuizData, getQuizDataSaga);
}

export default quizSaga;