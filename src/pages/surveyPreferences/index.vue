<template>
  <div class="survey">
    <div class="survey__timeline">
      <div class="survey__line" />
      <img class="survey__cursor" :style="{ top: `calc((50% - (15px / 2)) + (50% / 5) * ${currentStepSymptoms - 1})` }" src="~/assets/images/le-ptit-mec_17hledimanche.png" />
      <div class="survey__separator" />
    </div>
    <div class="survey__content">
      <h1 class="survey__subtitle">
        {{ onSurvey.title }}
      </h1>
      <div class="survey__questions">
        <div v-for="question of onSurvey.questions" :key="question.id" class="survey__question">
          <h2 class="survey__question-title">
            {{ question.title }}
          </h2>
          <InputText v-if="question.type == 'text'" :title="question.title" />
          <RadioBox v-else-if="question.type == 'radio'" v-for="answer of question.answers" :key="answer.id" :label="answer.text" :value="answer.id" v-model="answerSelected" />
        </div>
      </div>
      <Button value="Suivant" :change-step="changeStep" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SurveyPage',
  data () {
    return {
      answerSelected: 'Z',
      onSurvey: {
        id: 1,
        title: 'Genre',
        questions: [
          {
            id: 1,
            type: 'radio',
            title: 'Tu préfères consulter...',
            answers: [
              {
                id: 'Z',
                text: 'Un homme'
              },
              {
                id: 'A',
                text: 'Une femme'
              },
              {
                id: 'B',
                text: 'Indifférent'
              }
            ]
          }
        ]
      },
      data: [
        {
          id: 1,
          title: 'Genre',
          // type: 'radio',
          questions: [
            {
              id: 1,
              title: 'Comment ça se passe dans ton assiette ?'
            }
          ]
        },
        {
          id: 2,
          title: 'Géolocalisation',
          questions: [
            {
              id: 1,
              type: 'text',
              title: 'Adresse de ton domicile'
            }
          ]
        },
        {
          id: 3,
          title: 'Distance',
          questions: [
            {
              id: 1,
              type: 'radio',
              title: 'Dans un rayon de...',
              answers: [
                {
                  id: 'Z',
                  text: '10km'
                },
                {
                  id: 'A',
                  text: '20km'
                },
                {
                  id: 'B',
                  text: '50km'
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
      const targetedQuestion = this.data.find(question => question.id === 1)
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
      z-index: 2;
      position: absolute;
      width: 25px;
      //height: 15px;
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

    &__question {
      &-answers {
        display: flex;
        flex-direction: column;
      }

      &-answer {
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
</style>

<router>
  {
    path: '/questionnaire-preferences'
  }
</router>
