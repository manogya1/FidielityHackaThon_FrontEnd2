<template>
    <div>
      <h2>{{ lesson.title }}</h2>
      <p>{{ lesson.content }}</p>
      <button @click="nextLesson">Next Lesson</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      lesson: Object,
      onNextLesson: Function
    },
    methods: {
      nextLesson() {
        this.onNextLesson();
      }
    }
  }
  </script>
z  