export default {
  saveChangeOptions(context, payload) {
    context.commit('UPDATE_CHANGE_OPTIONS', payload);
  },
  saveBreakingOptions(context, payload) {
    context.commit('UPDATE_BREAKING_OPTIONS', payload);
  },
  saveTestingOptions(context, payload) {
    context.commit('UPDATE_TESTING_OPTIONS', payload);
  },
  saveMergeOptions(context, payload) {
    context.commit('UPDATE_MERGE_OPTIONS', payload);
  },
};
