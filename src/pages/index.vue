<template>
  <div class="on-boarding">
    <header class="on-boarding__header">
      <img class="on-boarding__header-src" :src="onBoard.imgSrc" alt="Image de présentation de l'introduction" />
    </header>
    <div class="on-boarding__content">
      <h1 class="on-boarding__logo">
        {{ onBoard.title }}
      </h1>
      <p class="on-boarding__text">
        {{ onBoard.description }}
      </p>
      <div class="on-boarding__footer">
        <div class="on-boarding__steps">
          <div id="step-1" class="on-boarding__step active" @click="changeStep" />
          <div id="step-2" class="on-boarding__step" @click="changeStep" />
          <div id="step-3" class="on-boarding__step" @click="changeStep" />
          <div id="step-4" class="on-boarding__step" @click="changeStep" />
        </div>
      </div>
      <Button :value="currentStep === 4 ? 'Commencer' : 'Suivant'" :change-step="changeStep" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import picto1 from '~/assets/images/picto1_17hledimanche.svg?inline'
import picto2 from '~/assets/images/picto2_17hledimanche.svg?inline'
import picto3 from '~/assets/images/picto3_17hledimanche.svg?inline'
import picto4 from '~/assets/images/picto4_17hledimanche.svg?inline'

export default {
  name: 'OnBoardingPage',
  data () {
    return {
      onSurvey: {
        id: 1,
        title: 'Alimentation',
        questions: [
          {
            id: 1,
            title: 'Comment ça se passe dans ton assiette ?',
            answers: [
              {
                id: 1,
                text: 'Rien à signaler, je mange bien',
                selected: 0
              },
              {
                id: 2,
                text: 'J\'ai parfois l\'appétit coupé ou besoin de grignoter',
                selected: 0
              },
              {
                id: 3,
                text: 'Je saute souvent les repas ou les double',
                selected: 0
              },
              {
                id: 4,
                text: 'J\'ai perdu l\'appétit ou je me réfugie dans le frigo de manière incontrôlée',
                selected: 0
              }
            ]
          }
        ]
      },
      onBoard: {
        id: 1,
        title: 'Bienvenue sur \n 17h le dimanche !',
        description: 'La boussole d\'orientation pour prendre soin de ta santé mentale.',
        imgSrc: picto1
      },
      data: [
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
  computed: {
    ...mapState({
      currentStep: state => state.introduction.currentStep
    })
  },
  methods: {
    ...mapMutations('introduction', ['UPDATE_STEP']),
    changeStep (event) {
      const steps = document.querySelectorAll('.on-boarding__step')
      if (event.target.id) {
        this.UPDATE_STEP({ id: parseInt(event.target.id[5], 10) })
      } else {
        if (this.currentStep === 4) {
          this.$router.push('/accueil')
          this.UPDATE_STEP({ id: 1 })
        }

        this.UPDATE_STEP({ id: this.currentStep + 1 })
      }

      steps.forEach((step) => {
        if (step.classList.value === 'on-boarding__step active') {
          step.classList.remove('active')
        }
        if (parseInt(step.id[5], 10) === this.currentStep) {
          step.classList.add('active')
        }
      })

      const targetedStep = this.data.find(step => step.id === this.currentStep)
      this.onBoard = targetedStep
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
    padding: 50px 30px;
    height: 100vh;

    &__header {
      display: flex;
      justify-content: center;
      align-items: center;

      &-src {
        width: 275px;
        height: 275px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    &__text {
      text-align: center;
      margin-bottom: 30px;
      height: 70px;
    }

    &__steps {
      display: flex;
      margin-bottom: 50px;
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
        margin-right: 0px;
      }

      &.active {
        width: 30px;
        background-color: $secondary;
      }
    }
  }
</style>
