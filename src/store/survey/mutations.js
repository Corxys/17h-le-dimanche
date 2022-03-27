export default {
  UPDATE_STEP_SYMPTOMS (state, payload) {
    state.currentStepSymptoms = payload.id
  },
  STORE_SYMPTOMS (state, payload) {
    if (payload.type === 'Alimentation') {
      console.log('ALIMENTATION')
      state.answers['Alimentation'] = payload.id
    } else if (payload.type === 'Sommeil') {
      state.answers['Sommeil'] = payload.id
    } else if (payload.type === 'Social (conflit)') {
      state.answers['Social (conflit)'] = payload.id
    } else if (payload.type === 'Stress/Anxiete') {
      state.answers['Stress/Anxiete'] = payload.id
    } else if (payload.type === 'Attention') {
      state.answers['Attention'] = payload.id
    }
  }
}
