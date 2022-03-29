<template>
  <button class="button" @click="changeStep">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: ['value', 'changeStep']
}
</script>

<style lang="scss" scoped>
  .button {
    background-color: $primary;
    color: white;
    padding: 15px 40px;
    border-radius: 50px;
  }
</style>

