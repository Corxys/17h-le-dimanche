<template>
  <div class="introduction-survey">
    <div class="introduction-survey__header">
      <img class="introduction-survey__header-src" src="~/assets/images/17hledimanche_illus2.png" alt="Image de présentation pour le questionnaire des préférences" />
    </div>
      <div class="introduction-survey__content">
        <h1 class="introduction-survey__title">
          Titre de la page
        </h1>
        <p class="introduction-survey__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel viverra risus, et ullamcorper felis. Duis neque nunc, aliquet eu est id, venenatis tempor arcu. Nullam accumsan magna ullamcorper leo sagittis.</p>
        <router-link to="/questionnaire-preferences">
          <ButtonSimple value="Commencer" />
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPreferencesPage'
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
    path: '/introduction-preferences'
  }
</router>
