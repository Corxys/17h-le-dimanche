<!--<template>-->
<!--  <div class="form__item">-->
<!--    <h2 class="form__item&#45;&#45;title">-->
<!--      {{ title }}-->
<!--    </h2>-->
<!--    <div class="form__item&#45;&#45;checkboxes">-->
<!--      <div v-for="answer in answers" :key="answer.id" class="checkbox-item">-->
<!--        <label :for="`check-${answer.id}`">-->
<!--          <input type="radio" :id="`check-${answer.id}`" :value="answer.id" :checked="isChecked" />-->
<!--          {{ answer.text }}-->
<!--        </label>-->
<!--&lt;!&ndash;        <input type="radio" :value="value" :checked="isChecked" @change="$emit('change', $event.target.value)" />&ndash;&gt;-->
<!--&lt;!&ndash;        <label ></label>&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'InputRangeComponent',-->
<!--  model: {-->
<!--    prop: 'modelValue',-->
<!--    event: 'change'-->
<!--  },-->
<!--  props: ['modelValue', 'title', 'answers'],-->
<!--  // data () {-->
<!--  //   return {-->
<!--  //     selected: 'Z'-->
<!--  //   }-->
<!--  // },-->
<!--  computed: {-->
<!--    // isChecked () {-->
<!--    //   // return this.modelValue == ;-->
<!--    // }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--  .form {-->
<!--    &__item {-->
<!--      &&#45;&#45;title {-->
<!--        text-align: left;-->
<!--      }-->

<!--      &-checkboxes {-->
<!--        display: grid;-->
<!--        row-gap: 0.5rem;-->
<!--      }-->

<!--      label {-->
<!--        font-size: 16px;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  .checkbox-item {-->
<!--    margin-bottom: 10px;-->

<!--    &:last-child {-->
<!--      margin-bottom: 0px;-->
<!--    }-->
<!--  }-->
<!--</style>-->
