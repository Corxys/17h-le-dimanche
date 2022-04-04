<template>
  <main class="on-boarding">
    <img class="on-boarding__image" :src="currentStep.imgSrc" alt="Image de présentation de l'introduction" />
    <div class="on-boarding__content">
      <h1 class="on-boarding__title">
        {{ currentStep.title }}
      </h1>
      <p class="on-boarding__description">
        {{ currentStep.description }}
      </p>
    </div>
    <div class="on-boarding__steps">
      <div v-for="step of steps" :id="`step-${step.id}`" :class="step.id === currentStep.id ? 'on-boarding__step active' : 'on-boarding__step'" @click="changeStep" />
    </div>
    <Button :value="currentStep.id !== 4 ? 'Suivant' : 'Commencer'" :change-step="changeStep" />
  </main>
</template>

<script>
import picto1 from '~/assets/images/picto1_17hledimanche.svg?inline'
import picto2 from '~/assets/images/picto2_17hledimanche.svg?inline'
import picto3 from '~/assets/images/picto3_17hledimanche.svg?inline'
import picto4 from '~/assets/images/picto4_17hledimanche.svg?inline'

export default {
  name: 'OnBoardingPage',
  data () {
    return {
      currentStep: {
        id: 1,
        title: 'Bienvenue sur \n 17h le dimanche !',
        description: 'La boussole d\'orientation pour prendre soin de ta santé mentale.',
        imgSrc: picto1
      },
      steps: [
        {
          id: 1,
          title: 'Bienvenue sur \n 17h le dimanche !',
          description: 'La boussole d\'orientation pour prendre soin de ta santé mentale.',
          imgSrc: picto1
        },
        {
          id: 2,
          title: 'Nous pouvons t\'aider à comprendre',
          description: 'Si tu te poses des questions sur ta santé mentale, si tu veux comprendre les différences entre psychiatre et psychologue, si tu cherches un spécialiste près de chez toi.',
          imgSrc: picto2
        },
        {
          id: 3,
          title: 'Ici, tu pourras trouver tes réponses',
          description: 'Tu auras des infos sur les métiers et un parcours personnalisé pour trouver un spécialiste adapté.',
          imgSrc: picto3
        },
        {
          id: 4,
          title: 'Ce que nous ne faisons pas',
          description: 'Remplacer un diagnostic ou encore gérer une crise, pour cela nous te renvoyons vers ton médecin généraliste, vers les fils d\'écoute SOS ou vers les urgences psychiatriques.',
          imgSrc: picto4
        }
      ]
    }
  },
  methods: {
    changeStep (event) {
      // console.log('CHANGE STEP!!!')
      const steps = document.querySelectorAll('.on-boarding__step')
      if (event.target.id) {
        const stepId = parseInt(event.target.id.split('-')[1], 10)
        this.currentStep = this.steps.find(step => step.id === stepId)
      } else {
        if (this.currentStep.id < this.steps.length) {
          this.currentStep = this.steps.find(step => step.id === this.currentStep.id + 1)
        } else {
          this.$router.push('/accueil')
          setTimeout(() => {
            this.currentStep = this.steps.find(step => step.id === 1)
          }, 1000)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .on-boarding {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 3.125rem 1.875rem;
    height: 100vh;
    width: 100vw;

    &__image {
      width: 80%;
      max-width: 350px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 350px;
    }

    &__description {
      text-align: center;
      margin-bottom: 1.875rem;
      min-height: 4.375rem;
    }

    &__steps {
      display: flex;
      margin-bottom: 3.125rem;
    }
    &__step {
      cursor: pointer;
      height: 12px;
      width: 12px;
      border: 1px solid $secondary;
      border-radius: 10px;
      margin-right: 10px;
      transition: width 0.2s ease;

      &:last-child {
        margin-right: 0;
      }

      &.active {
        width: 30px;
        background-color: $secondary;
      }
    }
  }
</style>
