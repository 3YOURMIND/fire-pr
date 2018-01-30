export default {
  UPDATE_CHANGE_OPTIONS(state, payload) {
    state.options.change = payload;
  },
  UPDATE_BREAKING_OPTIONS(state, payload) {
    state.options.breaking = payload;
  },
  UPDATE_TESTING_OPTIONS(state, payload) {
    state.options.testing = payload;
  },
  UPDATE_MERGE_OPTIONS(state, payload) {
    state.options.merge = payload;
  },
}
