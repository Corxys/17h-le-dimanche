export default {
  UPDATE_STEP_SYMPTOMS (state, payload) {
    state.currentStepSymptoms = payload.id
  },
  STORE_SYMPTOMS (state, payload) {
    state.answers.push({ key: payload.type, value: payload.id })
  }
}
