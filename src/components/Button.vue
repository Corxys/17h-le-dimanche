<template>
  <button class="button">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: ['value']
}
</script>

<style scoped>
  .button {
    background-color: pink;
    color: white;
    padding: 15px 25px;
    border-radius: 50px;
  }
</style>