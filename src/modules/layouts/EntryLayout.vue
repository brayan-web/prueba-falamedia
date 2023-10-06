<template>
  <Navbar />
  <Banner />
  <AboutSection id="about" />
  <Features id="amenities" />
  <Cards id="suites" />
  <Reviews id="review" />
  <Form id="contact" />
  <Footer />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "Entry",
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    Banner: defineAsyncComponent(() => import("../components/Banner.vue")),
    AboutSection: defineAsyncComponent(() =>
      import("../components/AboutSection.vue")
    ),
    Features: defineAsyncComponent(() => import("../components/Features.vue")),
    Cards: defineAsyncComponent(() => import("../components/Cards.vue")),
    Reviews: defineAsyncComponent(() => import("../components/Reviews.vue")),
    Form: defineAsyncComponent(() => import("../components/Form.vue")),
    Footer: defineAsyncComponent(() => import("../components/Footer.vue")),
  },
};
</script>
