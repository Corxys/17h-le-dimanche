<template>
  <div class="form__item">
    <h2 class="form__item--title">
      {{ title }}
    </h2>
    <div class="form__item--checkboxes">
      <div v-for="answer in answers" :key="answer.id" class="checkbox-item">
        <input :id="`check-${answer.id}`" type="radio" :value="answer.id" v-model="selected">
          <label :for="`check-${answer.id}`">{{ answer.text }}</label>
        </input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputRange',
  props: [
    'title',
    'answers'
  ],
  data () {
    return {
      selected: '1'
    }
  }
}
</script>

<style scoped lang="scss">
  .form {
    &__item {
      &--title {
        text-align: left;
      }

      &-checkboxes {
        display: grid;
        row-gap: 0.5rem;
      }

      label {
        font-size: 16px;
      }
    }
  }

  .checkbox-item {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
</style>
