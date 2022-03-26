<template>
  <div class="survey">
    <div class="survey__timeline">
      <div class="survey__line" />
      <div class="survey__cursor" />
      <div class="survey__separator" />
    </div>
    <div class="survey__content">
      <h1 class="survey__subtitle">
        {{ onSurvey.title }}
      </h1>
      <div class="survey__questions">
        <div v-for="question of onSurvey.questions" :key="question.id" class="survey__question">
          <h2 class="survey__subtitlte">
            {{ question.title }}
          </h2>
          <InputRange :title="question.title" :answers="question.answers" />
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
                selected: 0,
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
              title: 'Question 1'
            },
            {
              id: 2,
              title: 'Question 2'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState({
      currentStepSymptoms: state => state.survey.currentStepSymptoms
    })
  },
  methods: {
    ...mapMutations('survey', ['UPDATE_STEP_SYMPTOMS']),
    changeStep () {
      const targetedQuestion = this.data.find(question => question.id === this.currentStepSymptoms + 1)
      console.log(targetedQuestion)
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
      left: 0px;
      bottom: 50px;
      width: 30px;
      background-color: green;
      display: flex;
      justify-content: center;
    }

    &__line {
      width: 3px;
      height: 100%;
      background-color: red;
    }

    &__cursor {
      position: absolute;
      top: calc((0% / 7) * 2);
      width: 15px;
      height: 15px;
      background-color: blue;
    }

    &__separator {
      position: absolute;
      top: calc(50% - (15px / 2));
      width: 15px;
      height: 15px;
      background-color: red;
      border-radius: 20px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      //height: calc(100vh - )
      //align-items: center;
    }

    button {
      align-self: center;
    }
  }
</style>

<router>
  {
    path: '/questionnement'
  }
</router>
