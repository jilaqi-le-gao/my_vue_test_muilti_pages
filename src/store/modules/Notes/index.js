const state = {
  notes: [],
  timestamps: [],
};

const mutations = {
  ADD_NOTES (state, payload) {
    let newNote = payload;
    state.notes.push(newNote);
  },
  ADD_TIMESTAMP (state, payload) {
    let newTimeStamp = payload;
    state.timestamps.push(newTimeStamp);
  }
};

const actions = {
  addNote(context, payload) {
    context.commit('ADD_NOTES', payload);
  },
  addTimestamp(context, payload) {
    context.commit('ADD_TIMESTAMP', payload);
  }
};

const getters = {
  getNotes () {
    return state.notes;
  },
  getTimestamps () {
    return state.timestamps;
  },
  getNoteCounts () {
    return state.notes.length;
  },
};

const loginModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default loginModule;