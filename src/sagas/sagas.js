import { takeLatest, put, call } from "redux-saga/effects";

export function* watchFetchFeed() {
  yield takeLatest("FEED_DATA_REQUESTED", fetchFeedAsync);
}

function* fetchFeedAsync(action) {
  try {
    yield put({ type: "FEED_DATA_LOADING" });
    const feedData = yield call(getData, action.url);

    yield put({ type: "FEED_DATA_SUCCESS", data: feedData.data });
  } catch (err) {
    console.log(err);
    yield put({ type: "FEED_DATA_FAILURE", err });
  }
}

const getData = (url) => {
  //console.log(url);
  return fetch(url).then((res) => res.json());
};
