<template>
  <div class="create-lesson">
    <h2>Create Lesson</h2>
    <!-- nasluchiwanie zdarzenia subimt i wywolania metody create leesson -->
    <form @submit.prevent="createLesson">
      <div class="form-group">
        <label for="title">Lesson Title</label>
        <input type="text" id="title" v-model="title" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="description">Lesson Description</label>
        <textarea id="description" v-model="description" class="form-control" required></textarea>
      </div>
      <div class="form-group">
        <label for="timestamp">Current Date and Time</label>
        <input type="text" id="timestamp" v-model="timestamp" class="form-control" readonly />
      </div>
      <button type="submit" class="btn btn-danger">Save Lesson</button>
    </form>
  </div>
</template>

<script>
export default {
  // Zdefiniowanie danych komponentu
  data() {
    return {
      title: '',
      description: '',
      timestamp: new Date().toLocaleString()
    }
  },
  methods: {
    // Metoda tworząca nową lekcję
    createLesson() {
      const lesson = {
        title: this.title, // Przypisanie tytułu lekcji
        description: this.description, // Przypisanie opisu lekcji
        timestamp: new Date().toLocaleString() // Ustawienie aktualnego czasu
      }
      // Wyemitowanie zdarzenia 'add-lesson' z nową lekcją jako argument
      this.$emit('add-lesson', lesson)
      // Resetowanie pól formularza
      this.title = ''
      this.description = ''
      this.timestamp = new Date().toLocaleString()
      // Przekierowanie użytkownika do widoku lekcji
      this.$router.push('/lessons')
    },
    // Metoda aktualizująca czas co sekundę
    updateTimestamp() {
      setInterval(() => {
        this.timestamp = new Date().toLocaleString()
      }, 1000)
    }
  },
  // Wywołanie metody updateTimestamp po zamontowaniu komponentu
  mounted() {
    this.updateTimestamp()
  }
}
</script>

<style scoped>
.create-lesson {
  max-width: 600px;
  margin: 155px auto; /* Add margin to the top and center the form horizontally */
  padding: 20px;
  background: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center the text */
}
.form-group {
  margin-bottom: 15px;
  text-align: left; /* Align form labels and inputs to the left */
}
</style>
