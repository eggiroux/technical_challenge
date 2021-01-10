import produce from "immer";

const initialState = {
  status: "loading",
  feed: null,
  users: null,
};

export default function feedsReducer(state = initialState, action) {
  switch (action.type) {
    case "FEED_DATA_LOADING": {
      return produce(state, (draftState) => {
        draftState.status = "loading";
      });
    }
    case "FEED_DATA_SUCCESS": {
      //console.log(action);
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.feed = action.data;
        draftState.users = action.expansion.users;
      });
    }
    case "FEED_DATA_FAILURE": {
      console.log(action);
      return produce(state, (draftState) => {
        draftState.status = "error";
      });
    }

    default: {
      return state;
    }
  }
}
