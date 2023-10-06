<template>
  <div class="success-msg">
    <div class="u-center-text">
      <h1>
        Gracias <span>{{ user.name }}</span> por visitarnos, en breve sera
        enviado un correo a <span>{{ user.email }}</span>
      </h1>
      <router-link to="/">
        <a href="" class="btn btn--beige">Regresar</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("user", {
      user: "getUser",
    }),
  },
};
</script>
