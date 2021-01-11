import produce from "immer";

import {
  FEED_DATA_LOADING,
  FEED_DATA_SUCCESS,
  FEED_DATA_FAILURE,
} from "../actions";

const initialState = {
  status: "loading",
  feed: null,
  error: null,
};

export default function feedsReducer(state = initialState, action) {
  switch (action.type) {
    case FEED_DATA_LOADING: {
      return produce(state, (draftState) => {
        draftState.status = "loading";
      });
    }
    case FEED_DATA_SUCCESS: {
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.feed = action.data;
      });
    }
    case FEED_DATA_FAILURE: {
      return produce(state, (draftState) => {
        draftState.status = "error";
        draftState.error = action.err.message;
      });
    }

    default: {
      return state;
    }
  }
}
