<template>
  <div class="form__item">
    <h2 class="form__item--title">Question</h2>
    <div class="form__item--checkbox">
      <input type="radio" value="0" v-model="selected" />
      <label>apple</label>
    </div>
    <div class="form__item--checkbox">
      <input type="radio" value="1" v-model="selected" />
      <label>orange</label>
    </div>
    <div class="form__item--checkbox">
      <input type="radio" value="2" v-model="selected" />
      <label>grape</label>
    </div>
    <div class="form__item--checkbox">
      <input type="radio" value="3" v-model="selected" />
      <label>grape</label>
    </div>
    <!-- <h1>{{ counter }}</h1> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'InputRange',
  // props: []
  data() {
    return {
      selected: '0'
    }
  },
  computed: {
    ...mapState({
      counter: state => state.praticien.counter
    })
  }
}
</script>
