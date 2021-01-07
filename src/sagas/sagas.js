import { takeLatest, put, call } from "redux-saga/effects";

export function* watchFetchFeed() {
  yield takeLatest("FEED_DATA_REQUESTED", fetchFeedAsync);
}

function* fetchFeedAsync(action) {
  try {
    const feedData = yield call(getData, action.url);

    yield put({ type: "FEED_DATA_SUCCESS", feedData });
  } catch (err) {
    yield put({ type: "FEED_DATA_FAILURE", err });
  }
}

const getData = (url) => {
  return fetch(url).then((response) => response.json());
};
