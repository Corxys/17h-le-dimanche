<template>
  <div>
    <Tutorial />
    <h1>{{ counter }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapState({
      counter: state => state.praticien.counter
    })
  }
}
</script>
