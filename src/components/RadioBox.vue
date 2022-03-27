<template>
  <label class="survey__question-answer">
    <input type="radio" :checked="isChecked" :value="value" @change="$emit('change', $event.target.value)" />
    {{ label }}
  </label>
</template>

<script>
export default {
  name: 'RadioBoxComponent',
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: ['label', 'modelValue', 'value'],
  computed: {
    isChecked () {
      return this.modelValue == this.value
    }
  }
}
</script>

<style scoped>

</style>
