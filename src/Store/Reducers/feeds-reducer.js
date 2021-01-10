import produce from "immer";

import {
  FEED_DATA_LOADING,
  FEED_DATA_SUCCESS,
  FEED_DATA_FAILURE,
} from "../actions";

const initialState = {
  status: "loading",
  feed: null,
  users: null,
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
      //console.log(action);
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.feed = action.data;
        draftState.users = action.expansion.users;
      });
    }
    case FEED_DATA_FAILURE: {
      //console.log(action);
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
