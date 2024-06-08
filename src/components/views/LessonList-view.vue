<template>
  <div class="lesson-list">
    <h2>Lesson List</h2>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search lessons..."
        class="form-control"
      />
    </div>
    <div v-for="lesson in filteredLessons" :key="lesson.id" class="lesson-item">
      <h3>{{ lesson.title }}</h3>
      <p>{{ lesson.description }}</p>
      <small>{{ lesson.timestamp }}</small>
      <button @click="joinLesson(lesson)" class="btn btn-primary mt-2 ms-3">Join</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['lessons'],
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    filteredLessons() {
      return this.lessons.filter((lesson) => {
        const searchLower = this.searchQuery.toLowerCase()
        return (
          lesson.title.toLowerCase().includes(searchLower) ||
          lesson.description.toLowerCase().includes(searchLower) ||
          lesson.timestamp.toLowerCase().includes(searchLower)
        )
      })
    }
  },
  methods: {
    joinLesson(lesson) {
      this.$emit('join-lesson', lesson)
    }
  }
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
.search-bar {
  margin-bottom: 20px;
}
</style>
