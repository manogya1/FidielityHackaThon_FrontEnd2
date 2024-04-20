<template>
    <div>
      <h3>Explanation</h3>
      <p>{{ explanation }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      explanation: String
    }
  }
  </script>
  