<template>
  <div class="results">
    <h1 class="results__title">
      Nous vous conseillons
    </h1>
    <div class="results__cards">
      <div class="results__card">
        <h2 class="results__card-title">Sophrologie</h2>
        <p class="results__card-description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <ButtonSimple value="Plus" />
      </div>
      <div class="results__card">
        <h2 class="results__card-title">Naturopathie</h2>
        <p class="results__card-description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <ButtonSimple value="Plus" />
      </div>
    </div>
    <p class="results__text">
      C'est bon, je suis renseignée !
    </p>
    <router-link to="/questionnaire-preferences">
      <ButtonSimple value="Continuer" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ResultsSymptomsPage'
}
</script>

<style lang="scss" scoped>
  .results {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 30px;

    &__cards {
      margin-bottom: 80px;
    }

    &__card {
      display: flex;
      flex-direction: column;
      background-color: #f3ebd6;
      border-radius: 15px;
      padding: 30px;
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0px;
      }

      &-title {
        margin-bottom: 15px;
      }

      &-description {
        margin-bottom: 20px;
      }

      button {
        align-self: flex-end;
      }
    }

    &__text {
      text-align: center;
      margin-bottom: 10px;
    }
  }
</style>

<router>
  {
    path: '/resultats-symptomes'
  }
</router>
