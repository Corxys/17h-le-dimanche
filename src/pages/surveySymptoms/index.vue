<template>
  <div class="survey">
    <div class="survey__timeline">
      <div class="survey__line" />
      <div class="survey__cursor" :style="{ top: `calc((50% / 7) * ${currentStepSymptoms - 1})` }" />
      <div class="survey__separator" />
    </div>
    <div class="survey__content">
      <h1 class="survey__subtitle">
        {{ onSurvey.title }}
      </h1>
      <div class="survey__questions">
        <div v-for="question of onSurvey.questions" :key="question.id" class="survey__question">
          <InputRange :title="question.title" :answers="question.answers" />
        </div>
      </div>
      <Button v-if="currentStepSymptoms === data.length" value="Fin partie 1" />
      <Button v-else value="Suivant" :change-step="changeStep" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SurveyPage',
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
                id: 'Z',
                text: 'Rien à signaler, je mange bien'
              },
              {
                id: 'A',
                text: 'J\'ai parfois l\'appétit coupé ou besoin de grignoter'
              },
              {
                id: 'B',
                text: 'Je saute souvent les repas ou les double'
              },
              {
                id: 'C',
                text: 'J\'ai perdu l\'appétit ou je me réfugie dans le frigo de manière incontrôlée'
              }
            ]
          }
        ]
      },
      data: [
        {
          id: 1,
          title: 'Alimentation',
          questions: [
            {
              id: 1,
              title: 'Comment ça se passe dans ton assiette ?'
            }
          ]
        },
        {
          id: 2,
          title: 'Sommeil',
          questions: [
            {
              id: 1,
              title: 'Comment ça se passe ton sommeil ?',
              answers: [
                {
                  id: 'Z',
                  text: 'Tout va bien, comme d\'habitude'
                },
                {
                  id: 'A',
                  text: 'Je dors peu ou beaucoup, mais comme d\'habitude'
                },
                {
                  id: 'B',
                  text: 'Du mal à m\'endormir'
                },
                {
                  id: 'C',
                  text: 'Je dors beaucoup plus que d\'habitude'
                }
              ]
            }
          ]
        },
        {
          id: 3,
          // title: 'Vie sociale et relationnelle',
          title: 'Social (conflit)',
          questions: [
            {
              id: 1,
              title: 'Comment ça se passe avec ton entourage ?',
              answers: [
                {
                  id: 'Z',
                  text: 'Je suis très entourée, il y a peu de conflit'
                },
                {
                  id: 'A',
                  text: 'Je me sens entourée la plupart du temps mais il y a des conflits difficiles'
                },
                {
                  id: 'B',
                  text: 'Je me sens seul.e la plupart du temps et ai du mal à gérer les conflits, je me force à sortir'
                },
                {
                  id: 'C',
                  text: 'Je suis isolée, je ne sors plus, j\'ai beaucoup de problèmes relationnels'
                }
              ]
            }
          ]
        },
        {
          id: 4,
          title: 'Anxiété/Stress',
          questions: [
            {
              id: 1,
              title: 'Es-tu sujet au stress ?',
              answers: [
                {
                  id: 'Z',
                  text: 'Pas plus que d\'habitude'
                },
                {
                  id: 'A',
                  text: 'Je me sens tendu par moment, je rumine'
                },
                {
                  id: 'B',
                  text: 'Je me sens stressé.e souvent, mes pensées sont envahissantes'
                },
                {
                  id: 'C',
                  text: 'Je me sens mal au quotidien ou je fais des crises d\'angoisse'
                }
              ]
            }
          ]
        },
        {
          id: 5,
          title: 'Attention',
          questions: [
            {
              id: 1,
              title: 'Comment vis-tu ton quotidien ?',
              answers: [
                {
                  id: 'Z',
                  text: 'Je mène mes projets à court et long terme'
                },
                {
                  id: 'A',
                  text: 'Je gère au quotidien mais j\'ai du mal à me concentrer parfois'
                },
                {
                  id: 'B',
                  text: 'J\'ai moins de projets, je m\'éparpille dans ma concentration'
                },
                {
                  id: 'C',
                  text: 'Je n\'ai pas de projet j\'essaye de gérer au jour le jour c\'est déjà difficile'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState({
      currentStepSymptoms: state => state.survey.currentStepSymptoms
    }),

    cssVars () {
      return {
        '--multiplicator': this.currentStepSymptoms
      }
    }
  },
  methods: {
    ...mapMutations('survey', ['UPDATE_STEP_SYMPTOMS']),
    changeStep () {
      const targetedQuestion = this.data.find(question => question.id === this.currentStepSymptoms + 1)
      // console.log(targetedQuestion)
      this.onSurvey = targetedQuestion
      this.UPDATE_STEP_SYMPTOMS({ id: this.currentStepSymptoms + 1 })
    }
  }
}
</script>

<style lang="scss" scoped>
  .survey {
    padding: 50px 30px;
    height: 100vh;

    &__timeline {
      position: absolute;
      top: 50px;
      left: 30px;
      bottom: 50px;
      width: 30px;
      display: flex;
      justify-content: center;
    }

    &__line {
      position: relative;
      width: 3px;
      height: 100%;
      background-color: $secondary;

      &:before, &:after {
        content: '';
        position: absolute;
        left: calc(-11px / 2);
        width: 15px;
        height: 15px;
        background-color: $background;
        border-radius: 20px;
        border: 3px solid $secondary;
      }

      &:before {
        top: 0;
      }

      &:after {
        bottom: 0;
      }
    }

    &__cursor {
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: blue;
      transition: top 0.2s ease;
    }

    &__separator {
      position: absolute;
      top: calc(50% - (15px / 2));
      width: 15px;
      height: 15px;
      background-color: $secondary;
      border-radius: 20px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 60px;
      height: 100%;
    }

    button {
      align-self: center;
    }
  }
</style>

<router>
  {
    path: '/questionnaire-symptomes'
  }
</router>
