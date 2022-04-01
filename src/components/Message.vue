<template>
  <div class="message">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.message {
  h2 {
    text-align: center;
    tab-size: 20px;
    font-weight: normal;
    color: #fc5c65;
  }
}
</style>
