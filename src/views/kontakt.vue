<template>
  <article class="view view--kontakt" v-bind:style="{marginLeft: margin_left}">
    <ViewHeader text="Kontakt"></ViewHeader>

    <section class="section section--kontakt">
      <header class="header">
        <h3>Bartłomiej Bober</h3>
        <h4>Junior Front-end Developer</h4>
      </header>

      <div class="contact-item">
        <span class="contact-item__name">e-mail:</span>
        <a href="mailto:bartek.bober97@gmail.com" class="link">bartek.bober97@gmail.com</a>
      </div>

      <div class="contact-item">
        <span class="contact-item__name">Numer kontaktowy:</span>
        <a href="tel:570640620" class="link">570-640-620</a>
      </div>
    </section>
  </article>
</template>

<script>
import ViewHeader from "../components/ViewHeader";

export default {
  name: "kontakt",
  components: { ViewHeader },
  data: () => {
    return {
      margin_left: "180px"
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      setTimeout(() => {
        this.margin_left = `${this.$store.state.interface.menu_width}`;
      }, 200);
    });

    if (window.outerWidth <= 768) {
      this.margin_left = 0;
    }
  }
};
</script>