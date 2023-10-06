<template>
  <div class="navigation">
    <input
      type="checkbox"
      v-model="checkNav"
      class="navigation__checkbox"
      id="navi-toggle"
    />

    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#" class="navigation__link" @click="scrollTo('suites')"
            >Suites</a
          >
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link" @click="scrollTo('review')"
            >Reseñas</a
          >
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link" @click="scrollTo('contact')"
            >contacto</a
          >
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link" @click="scrollTo('amenities')"
            >Amenidades</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkNav: false,
      bugNav: false,
      scrollPosition: null,
    };
  },
  methods: {
    scrollTo(id) {
      this.checkNav = false;
      let element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
<style></style>
