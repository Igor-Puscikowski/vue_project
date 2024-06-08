<template>
  <div class="centered-content">
    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
      <form class="formik" @submit.prevent="submitForm">
        <h1 class="SignIn">Sign In</h1>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInputIndex"
            placeholder="Wpisz index"
            v-model="student.index.value"
            @input="validateIndex"
          />
          <label for="floatingInputIndex">Index: {{ indexCount }}</label>
          <p v-if="errors.index.value" class="text-danger">{{ errors.index.value }}</p>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="student.password.value"
          />
          <label for="floatingPassword">Password:</label>
          <p v-if="errors.password.value" class="text-danger">{{ errors.password.value }}</p>
        </div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-dark">Login</button>
        </div>
        <p class="p-2">Don't have an account? <router-link to="/register">Sign Up</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const student = {
      index: ref(''),
      password: ref('')
    }
    const errors = {
      index: ref(''),
      password: ref('')
    }

    const indexCount = computed(() => {
      const indexLength = student.index.value ? student.index.value.length : 0
      return `${indexLength}/6`
    })

    function validateIndex() {
      student.index.value = student.index.value.replace(/\D/g, '')
      if (student.index.value.length > 6) {
        student.index.value = student.index.value.slice(0, 6)
      }
    }

    function submitForm() {
      let valid = true
      errors.index.value = ''
      errors.password.value = ''

      if (!student.index.value || student.index.value.length !== 6) {
        errors.index.value = 'Index must be exactly 6 digits.'
        valid = false
      }
      if (!student.password.value) {
        errors.password.value = 'Password is required.'
        valid = false
      }

      if (valid) {
        console.log('Logowanie studenta:', {
          index: student.index.value,
          password: student.password.value
        })
        student.index.value = ''
        student.password.value = ''
      }
    }

    return { student, errors, indexCount, validateIndex, submitForm }
  }
}
</script>
