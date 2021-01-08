export function requestFeedData(url) {
  return { type: "FEED_DATA_REQUESTED", url };
}
export function feedDataLoading() {
  return { type: "FEED_DATA_LOADING" };
}
