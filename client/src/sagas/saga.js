// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import API from '../utils/API';

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchGuest(action) {
//    try {
//       const user = yield call(API.getGuests, action.payload._id);
//       yield takeEvery({type: "GUEST_FETCH_SUCCEEDED", guest_id: _id});
//    } catch (e) {
//       yield put({type: "GUEST_FETCH_FAILED", message: e.message});
//    }
// }

// /*
//   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.
// */
// function* mySaga() {
//   yield takeEvery("GUEST_FETCH_REQUESTED", fetchGuest);
// }

// /*
//   Alternatively you may use takeLatest.

//   Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// function* mySaga() {
//   yield takeLatest("GUEST_FETCH_REQUESTED", fetchGuest);
// }

// export default mySaga;