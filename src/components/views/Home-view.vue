<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-content">
        <h1>Start Learning and Embrace New Skills For Better Future</h1>
        <p>
          With the help of E-Learning create your own path and drive on your skills on your own to
          achieve what you seek.
        </p>
        <router-link to="/register" class="btn btn-warning btn-lg">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home,
.hero-section {
  width: 100%;
  height: 85vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.hero-section {
  position: relative;
  background-image: url('@/assets/images/ele.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-content {
  background: rgba(0, 0, 0, 0.5); /* Czarny półprzezroczysty overlay */
  padding: 20px;
  border-radius: 10px;
}
</style>
