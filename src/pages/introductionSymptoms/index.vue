<template>
  <div class="introduction-survey">
    <div class="introduction-survey__header">
      <img class="introduction-survey__header-src" src="~/assets/images/17hledimanche_illus1.png" alt="Image de présentation pour le questionnaire des symptomes" />
    </div>
      <div class="introduction-survey__content">
        <h1 class="introduction-survey__title">
          Trouve la pratique qui te convient
        </h1>
        <p class="introduction-survey__text">
          Remplis la questionnaire en 3 minutes.</p>
        <router-link to="/questionnaire-symptomes">
          <ButtonSimple value="Commencer" />
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionSymptomsPage'
}
</script>

<style lang="scss" scoped>
  .introduction-survey {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 30px;
    height: 100vh;

    &__header {
      margin-top: 30px;

      &-src {
        width: 400px;
        height: 400px;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__text {
      margin-bottom: 90px;
      text-align: center;
    }
  }
</style>

<router>
  {
    path: '/introduction-symptomes'
  }
</router>
