<template>
  <div class="lesson-list">
    <h2>My Lessons</h2>
    <div v-if="myLessons.length > 0">
      <div v-for="lesson in myLessons" :key="lesson.id" class="lesson-item">
        <h3>{{ lesson.title }}</h3>
        <p>{{ lesson.description }}</p>
        <small>{{ lesson.timestamp }}</small>
      </div>
    </div>
    <div v-else>
      <p>No lessons joined yet.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['myLessons']
}
</script>

<style scoped>
.lesson-list {
  max-width: 800px;
  margin: 100px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.lesson-item {
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
