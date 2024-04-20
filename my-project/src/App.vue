<template>
  <div id="app">
    <LessonComponent v-if="currentLesson" :lesson="currentLesson" :onNextLesson="nextLesson" />
    <QuestionComponent v-if="currentQuestion" :question="currentQuestion" :onAnswerChecked="checkAnswer" />
    <ExplanationComponent v-if="explanation" :explanation="explanation" />
  </div>
</template>

<script>
import LessonComponent from './components/LessonComponent.vue';
import QuestionComponent from './components/QuestionComponent.vue';
import ExplanationComponent from './components/ExplanationComponent.vue';
import lessonData from '../data.js';

export default {
  name: 'App',
  components: {
    LessonComponent,
    QuestionComponent,
    ExplanationComponent
  },
  data() {
    return {
      lessons: lessonData.lessons,
      currentLessonIndex: 0,
      currentQuestionIndex: 0,
      currentLesson: null,
      currentQuestion: null,
      explanation: null
    };
  },
  methods: {
    nextLesson() {
      if (this.currentLessonIndex < this.lessons.length - 1) {
        this.currentLessonIndex++;
        this.currentLesson = this.lessons[this.currentLessonIndex];
        this.currentQuestionIndex = 0;
        this.currentQuestion = this.currentLesson.questions[this.currentQuestionIndex];
        this.explanation = null;
      }
    },
    checkAnswer(selectedOption) {
      const correctAnswer = this.currentQuestion.answer;
      if (selectedOption === correctAnswer) {
        this.explanation = "Correct!";
      } else {
        this.explanation = "Incorrect. Try again!";
      }
    }
  },
  created() {
    this.currentLesson = this.lessons[this.currentLessonIndex];
    this.currentQuestion = this.currentLesson.questions[this.currentQuestionIndex];
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
