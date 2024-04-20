<template>
    <div>
      <h3>{{ question.question }}</h3>
      <div v-for="(option, index) in question.options" :key="index">
        <input type="radio" :id="option" :value="option" v-model="selectedOption">
        <label :for="option">{{ option }}</label>
      </div>
      <button @click="checkAnswer">Check Answer</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: Object,
      onAnswerChecked: Function
    },
    data() {
      return {
        selectedOption: null
      };
    },
    methods: {
      checkAnswer() {
        this.onAnswerChecked(this.selectedOption);
      }
    }
  }
  </script>
  