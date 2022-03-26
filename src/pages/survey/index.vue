<template>
  <div class="survey">
    <div class="survey__timeline">
      <div class="survey__line" />
      <div class="survey__cursor" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurveyPage'
}
</script>

<style lang="scss" scoped>
  .survey {
    margin: 30px 0px;
    padding: 0px 30px;

    &__timeline {
      position: absolute;
      top: 30px;
      left: 30px;
      bottom: 30px;
      width: 30px;
      background-color: green;
      display: flex;
      justify-content: center;
    }

    &__line {
      width: 3px;
      height: 100%;
      background-color: red;
    }

    &__cursor {
      position: absolute;
      top: calc(100% - (15px / 2));
      width: 15px;
      height: 15px;
      background-color: blue;
    }
  }
</style>

<router>
  {
    path: '/questionnement'
  }
</router>
