export default {
  sendSurveySymptomsRequest (context) {
    const dict_of_values = {}
    const stringifyData = JSON.stringify(dict_of_values)
    console.log(stringifyData)

    // axios.post('', dict_of_values, { headers: { 'Content-Type': 'application/json' }})
  }
}
