import produce from "immer";

const initialState = {
  status: "loading",
  feeds: null,
};

export default function feedsReducer(state = initialState, action) {
  switch (action.type) {
    case "FEED_DATA_SUCCESS": {
      console.log(action);
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.token = action.data;
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
