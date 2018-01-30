export default {
  UPDATE_CHANGE_OPTIONS(state, payload) {
    state.options.change = payload;
  },
  UPDATE_BREAKING_OPTIONS(state, payload) {
    state.options.breaking = payload;
  }
}
