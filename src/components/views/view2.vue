<template>
  <div>
    <form @submit.prevent="submitForm">
      <h1>Sing Up</h1>
      <div>
        <label for="student-index">Index Studenta:</label>
        <input id="student-index" v-model="student.index" type="text" required />
      </div>
      <div>
        <label for="student-email">Email Studenta:</label>
        <input id="student-email" v-model="student.email" type="email" required />
      </div>
      <div>
        <InputText type="text" v-model="value" />
        <label for="student-password">Hasło:</label>
        <input id="student-password" v-model="student.password" type="password" required />
      </div>
      <button type="submit">Zarejestruj</button>
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">Password</label>
        </div>
        <div class="col-auto">
          <input
            type="password"
            id="inputPassword6"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-auto">
          <span id="passwordHelpInline" class="form-text"> Must be 8-20 characters long. </span>
        </div>
      </div>

      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Password</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        index: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Rejestrowanie studenta:', this.student)
      // Tutaj można dodać logikę wysyłania danych do serwera, etc.
    }
  }
}
</script>

<style>
/* Style mogą być dodane tutaj */
</style>
