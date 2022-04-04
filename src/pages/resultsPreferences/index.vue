<template>
  <div class="results">
    <h1 class="results__title">
      Nous te conseillons
    </h1>
    <div class="results__cards">
      <div class="results__card">
        <h2 class="results__card-title">L. Padmavati</h2>
        <p class="results__card-description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <div class="results__card-footer">
          <img class="results__card-src" src="~/assets/images/1_psycho_17hledimanche.png" />
          <router-link to="/praticien">
            <ButtonSimple value="Plus" />
          </router-link>
        </div>
      </div>
      <div class="results__card">
        <h2 class="results__card-title">R. Delon</h2>
        <p class="results__card-description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <div class="results__card-footer">
          <img class="results__card-src" src="~/assets/images/2_sophro_17hledimanche.png" />
          <router-link to="/praticien">
            <ButtonSimple value="Plus" />
          </router-link>
        </div>
      </div>
      <div class="results__card">
        <h2 class="results__card-title">F. Mazakka</h2>
        <p class="results__card-description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <div class="results__card-footer">
          <img class="results__card-src" src="~/assets/images/2_sophro_17hledimanche.png" />
          <router-link to="/praticien">
            <ButtonSimple value="Plus" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsPreferencesPage'
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
      max-width: 400px;

      &:last-child {
        margin-bottom: 0px;
      }

      &-title {
        margin-bottom: 15px;
      }

      &-description {
        margin-bottom: 20px;
      }

      &-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-src {
        height: 70px;
      }

      button {
        color: $primary;
        background-color: #f3ebd6;
        outline: 2px solid $primary;
        outline-offset: -2px;
        padding: 15px 20px;
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
    path: '/resultats-preferences'
  }
</router>
