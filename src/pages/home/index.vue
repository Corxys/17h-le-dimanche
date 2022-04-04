<template>
  <div class="home">
    <img class="logo" src="~/assets/images/logo_17hledimanche.png" alt="Logo de 17h le Dimanche">
    <div class="buttons-wrapper">
      <div class="button-container">
        <p>En questionnement ?</p>
        <router-link to="/introduction-symptomes">
          <ButtonSimple value="Découvrir" />
        </router-link>
      </div>
      <div class="button-container">
        <p>Besoin d'aide ?</p>
        <router-link to="/introduction-symptomes">
          <ButtonSimple value="Être orienté" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url('~/assets/images/home-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 50px 30px;
    height: 100vh;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 100%);
      height: 300px;
      width: 100%;
    }
  }

  //.logo-wrapper {
  //  font-size: 18rem;
  //  text-align: center;
  //  margin-bottom: 4rem;
  //}

    .logo {
      width: 275px;
      margin-top: 100px;
    }

  .buttons-wrapper {
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    align-items: center;

    .button-container {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 10px;
      text-align: center;
      color: $background;
    }
  }
</style>

<router>
  {
    path: '/accueil'
  }
</router>
