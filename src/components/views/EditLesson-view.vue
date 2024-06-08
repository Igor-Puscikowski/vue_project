<template>
  <div class="edit-lesson">
    <h2>Edit Lesson</h2>
    <form @submit.prevent="saveLesson">
      <div class="form-group">
        <label for="title">Lesson Title</label>
        <input type="text" id="title" v-model="lesson.title" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="description">Lesson Description</label>
        <textarea
          id="description"
          v-model="lesson.description"
          class="form-control"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="timestamp">Current Date and Time</label>
        <input
          type="text"
          id="timestamp"
          v-model="lesson.timestamp"
          class="form-control"
          readonly
        />
      </div>
      <button type="submit" class="btn btn-primary">Save Lesson</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lesson: {
        title: '',
        description: '',
        timestamp: ''
      }
    }
  },
  methods: {
    saveLesson() {
      this.$emit('save-lesson', this.lesson)
      this.$router.push('/admin-lessons')
    }
  },
  mounted() {
    const lessonId = this.$route.params.id
    const lesson = this.$props.lessons.find((l) => l.id === parseInt(lessonId))
    if (lesson) {
      this.lesson = { ...lesson }
    }
  },
  props: ['lessons']
}
</script>

<style scoped>
.edit-lesson {
  max-width: 600px;
  margin: 155px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.form-group {
  margin-bottom: 15px;
  text-align: left;
}
</style>
