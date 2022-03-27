export default {
  sendSurveySymptomsRequest (context) {
    const dict_of_values = { ...context.state.answers }
    // const stringifyData = JSON.stringify(dict_of_values)

    const ids = Object.values(context.state.answers)

    const buildURL = () => {
      return ids.join('/')
    }

    this.$axios.get(`http://0.0.0.0:5000/professions/${buildURL()}`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
