<template>
  <div class="form__item">
    <h2 class="form__item--title">
      {{ title }}
    </h2>
    <div class="form__item--text">
      <label for="first name">{{ title }}:</label>
      <input type="text" v-model="userAddress" :placeholder="title" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: [
    'title'
  ],
  data() {
    return {
      userAddress: ''
    }
  }
}
</script>

<style scoped lang="scss">
  // .form {
  //   &__item {
  //     &--title {
  //       text-align: left;
  //     }

  //     &-checkboxes {
  //       display: grid;
  //       row-gap: 0.5rem;
  //     }

  //     label {
  //       font-size: 16px;
  //     }
  //   }
  // }

  // .checkbox-item {
  //   margin-bottom: 10px;

  //   &:last-child {
  //     margin-bottom: 0px;
  //   }
  // }
</style>
