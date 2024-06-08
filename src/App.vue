<template>
  <div id="app">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand ms-3">E-Learning</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
            <li class="nav-item">
              <router-link to="/create" class="nav-link" active-class="active"
                >Create Lesson</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/lessons" class="nav-link" active-class="active"
                >Lessons</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/my-lessons" class="nav-link" active-class="active"
                >My Lessons</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/admin-lessons" class="nav-link" active-class="active"
                >Admin Lessons</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link" active-class="active"
                >Register</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid mt-5 pt-5">
      <router-view
        :lessons="lessons"
        :my-lessons="myLessons"
        @add-lesson="addLesson"
        @join-lesson="joinLesson"
        @delete-lesson="deleteLesson"
        @save-lesson="saveLesson"
      ></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lessons: [
        {
          id: 1,
          title: 'Introduction to Vue.js',
          description: 'Learn the basics of Vue.js and how to create dynamic web applications.',
          timestamp: '24.05.2024, 10:00:00'
        },
        {
          id: 2,
          title: 'Advanced Vue Techniques',
          description:
            'Dive deeper into Vue.js and learn advanced techniques for building complex applications.',
          timestamp: '24.05.2024, 12:00:00'
        }
      ],
      myLessons: []
    }
  },
  methods: {
    addLesson(newLesson) {
      this.lessons.push({ id: this.lessons.length + 1, ...newLesson })
    },
    joinLesson(lesson) {
      if (!this.myLessons.find((l) => l.id === lesson.id)) {
        this.myLessons.push(lesson)
      }
    },
    deleteLesson(lessonId) {
      this.lessons = this.lessons.filter((lesson) => lesson.id !== lessonId)
    },
    saveLesson(updatedLesson) {
      const index = this.lessons.findIndex((lesson) => lesson.id === updatedLesson.id)
      if (index !== -1) {
        this.lessons.splice(index, 1, updatedLesson)
      }
    }
  }
}
</script>

<style>
/* Global styles */
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  font-family: Arial, sans-serif;
}

.nav-link.active {
  font-weight: bold;
}
</style>
