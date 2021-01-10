export const FEED_DATA_REQUESTED = "FEED_DATA_REQUESTED";
export const FEED_DATA_LOADING = "FEED_DATA_LOADING";
export const FEED_DATA_SUCCESS = "FEED_DATA_SUCCESS";
export const FEED_DATA_FAILURE = "FEED_DATA_FAILURE";

export function requestFeedData(url) {
  return { type: FEED_DATA_REQUESTED, url };
}
