<template>
    <header class="header">
        <div class="header__logo-box">
        </div>
        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">
                    traveler
                </span>
                <span class="heading-primary--sub">
                    the magic happens
                </span>
            </h1>

            <a class="btn btn--beige  btn--animated" href="#" @click.prevent="scrollTo()">descubre mas </a>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        scrollTo() {
            let element = document.getElementById("about");
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
}
</script>