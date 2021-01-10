import { takeLatest, put, call } from "redux-saga/effects";

export function* watchFetchFeed() {
  yield takeLatest("FEED_DATA_REQUESTED", fetchFeedAsync);
}

function* fetchFeedAsync(action) {
  try {
    yield put({ type: "FEED_DATA_LOADING" });
    const feedData = yield call(getData, action.url);
    if (!feedData.includes) {
      throw new Error("No tweets found");
    }

    yield put({
      type: "FEED_DATA_SUCCESS",
      data: feedData.data,
      expansion: feedData.includes,
    });
  } catch (err) {
    yield put({ type: "FEED_DATA_FAILURE", err });
  }
}

const getData = (url) => {
  //console.log(url);
  return fetch(url).then((res) => res.json());
};
