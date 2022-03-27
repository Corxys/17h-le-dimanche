export default {
  sendSurveySymptomsRequest (context) {
    const dict_of_values = { ...context.state.answers }
    const stringifyData = JSON.stringify(dict_of_values)
    console.log(stringifyData)

    this.$axios.get('http://0.0.0.0:5000/', stringifyData, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
