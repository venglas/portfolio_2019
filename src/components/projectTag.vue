<template>
  <div class="tag" :class="typeclass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "projectTag",
  props: { type: String },
  data() {
    return {
      typeClass: "tag--"
    };
  },
  methods: {},
  created() {},
  computed: {
    typeclass() {
      const vm = this;

      switch (vm.type) {
        case "finished":
          return "tag--finished";
          break;

        case "inProgress":
          return "tag--in-progress";
          break;

        case "closed":
          return "tag--closed";
          break;
      }
    }
  }
};
</script>