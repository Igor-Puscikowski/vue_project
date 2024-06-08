<template>
  <div class="centered-content">
    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
      <form class="formik" @submit.prevent="submitForm">
        <h1 class="SignIn">Sign Up</h1>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInputIndex"
            placeholder="Wpisz index"
            v-model="student.index"
            @input="validateIndex"
          />
          <label for="floatingInputIndex">Index: {{ indexCount }}</label>
          <p v-if="errors.index" class="text-danger">{{ errors.index }}</p>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInputEmail"
            placeholder="name@example.com"
            v-model="student.email"
          />
          <label for="floatingInputEmail">Email: </label>
          <p v-if="errors.email" class="text-danger">{{ errors.email }}</p>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="student.password"
          />
          <label for="floatingPassword">Password:</label>
          <p v-if="errors.password" class="text-danger">{{ errors.password }}</p>
        </div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-dark">CREATE ACCOUNT</button>
        </div>
        <p class="p-2">Already have an account? <router-link to="/login">Log In</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const student = ref({
      index: '',
      email: '',
      password: ''
    })

    const errors = ref({
      index: '',
      email: '',
      password: ''
    })

    const indexCount = computed(() => {
      return `${student.value.index.length}/6`
    })

    function validateIndex() {
      student.value.index = student.value.index.replace(/\D/g, '') // Remove non-digits
      if (student.value.index.length > 6) {
        student.value.index = student.value.index.slice(0, 6) // Limit to 6 digits
      }
    }

    function submitForm() {
      let valid = true
      // Reset errors
      errors.value = { index: '', email: '', password: '' }

      // Validation checks
      if (!student.value.index || student.value.index.length !== 6) {
        errors.value.index = 'Index must be exactly 6 digits.'
        valid = false
      }
      if (!student.value.email) {
        errors.value.email = 'Email is required.'
        valid = false
      }
      if (!student.value.password) {
        errors.value.password = 'Password is required.'
        valid = false
      }

      if (valid) {
        console.log('Rejestrowanie studenta:', student.value)
        resetForm()
      }
    }

    function resetForm() {
      student.value.index = ''
      student.value.email = ''
      student.value.password = ''
    }

    return { student, errors, indexCount, submitForm, validateIndex }
  }
}
</script>
