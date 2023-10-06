<template>
  <div class="section-form">
    <div class="row">
      <div class="contact-us">
        <div class="contact-us__form">
          <div class="form">
            <div class="u-margin-bottom-medium">
              <h2 class="heading-secondary">Contactanos</h2>
            </div>
            <div class="form__group">
              <small
                class="u-text-error"
                v-for="(error, index) of v$.user.name.$errors"
                :key="index"
              >
                {{ error.$message }}
              </small>
              <input
                type="text"
                id="name"
                class="form__input"
                :class="v$.user.name.$error ? 'invalid-input' : ''"
                placeholder="Nombre"
                required
                v-model="v$.user.name.$model"
              />
              <label for="name" class="form__label">Nombre</label>
            </div>
            <div class="form__group">
              <small
                class="u-text-error"
                v-for="(error, index) of v$.user.email.$errors"
                :key="index"
              >
                {{ error.$message }}
              </small>

              <input
                type="text"
                id="email"
                class="form__input"
                :class="v$.user.email.$error ? 'invalid-input' : ''"
                placeholder="Correo"
                v-model="v$.user.email.$model"
              />
              <label for="email" class="form__label">Correo</label>
            </div>
            <div class="form__group u-margin-bottom-medium">
              <small
                class="u-text-error"
                v-for="(error, index) of v$.user.msg.$errors"
                :key="index"
              >
                {{ error.$message }}
              </small>
              <input
                type="textarea"
                id="msg"
                class="form__input-area"
                :class="v$.user.msg.$error ? 'invalid-input' : ''"
                placeholder="Mensaje"
                v-model="v$.user.msg.$model"
              />
            </div>
            <div class="form__group">
              <button
                v-if="!loader"
                class="btn btn--blue"
                @click="handleSubmit()"
              >
                Enviar &rarr;
              </button>
              <div v-if="loader" class="sk-circle">
                <div class="sk-circle1 sk-child"></div>
                <div class="sk-circle2 sk-child"></div>
                <div class="sk-circle3 sk-child"></div>
                <div class="sk-circle4 sk-child"></div>
                <div class="sk-circle5 sk-child"></div>
                <div class="sk-circle6 sk-child"></div>
                <div class="sk-circle7 sk-child"></div>
                <div class="sk-circle8 sk-child"></div>
                <div class="sk-circle9 sk-child"></div>
                <div class="sk-circle10 sk-child"></div>
                <div class="sk-circle11 sk-child"></div>
                <div class="sk-circle12 sk-child"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";
import { mapActions } from "vuex";
export default {
  name: "Formulario",
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      loader: false,
      user: {
        name: "",
        email: "",
        msg: "",
      },
    };
  },
  validations() {
    return {
      user: {
        name: {
          required: helpers.withMessage("El nombre es obligatorio", required),
        },
        email: {
          required: helpers.withMessage("El email es obligatorio", required),
          email: helpers.withMessage("Introduzca un correo valido", email),
        },
        msg: {
          required: helpers.withMessage("El mensaje es obligatorio", required),
        },
      },
    };
  },
  methods: {
    ...mapActions("user", ["getDataUser"]),
    async handleSubmit() {
      this.v$.$touch();
      if (this.v$.$error) return;

      this.loader = true;
      setTimeout(() => {
        this.$router.push({ name: "success-form" });
        this.getDataUser(this.user);
        this.loader = false;
      }, 2000);
    },
  },
};
</script>
