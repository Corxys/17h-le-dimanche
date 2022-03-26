<template>
  <button class="button">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'ButtonSimpleComponent',
  props: ['value']
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
