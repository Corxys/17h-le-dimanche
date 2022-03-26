<template>
  <div class="home">
    <figure class="logo-wrapper">
      <NuxtLogo class="logo" />
    </figure>
    <div class="buttons-wrapper">
      <div class="button-container">
        <p>Curieux ? En questionnement ?</p>
        <NuxtLink to="/questionnaire-symptomes">
          <ButtonSimple value="Découvrir" />
        </NuxtLink>
      </div>
      <div class="button-container">
        <p>Besoin d'aide ?</p>
        <NuxtLink to="/questionnaire-symptomes">
          <ButtonSimple value="Être orienté" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import NuxtLogo from '@/assets/images/logo-17h.svg'

export default {
  name: 'HomePage',
  components: { NuxtLogo }
}
</script>

<style scoped lang="scss">
  .home {
    background-image: url('~/assets/images/home-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    box-shadow: inset 0 0 0 100vw rgba(0,0,0,0.2);
    height: 100vh;
  }

  .logo-wrapper {
    font-size: 18rem;
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (min-width: 568px) {
      font-size: 23rem;
      margin-bottom: 7rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 27rem;
    }

    @media screen and (min-width: 991px) {
      margin-bottom: 0rem;
    }

    .logo {
      width: 1em;
      height: 1em;
      // vertical-align: top;
    }
  }

  .buttons-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    align-items: center;

    @media screen and (min-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      width: 50%;
      margin: 0 auto;
    }

    .button-container {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1rem;
      text-align: center;
    }
  }
</style>

<router>
  {
    path: '/accueil'
  }
</router>
