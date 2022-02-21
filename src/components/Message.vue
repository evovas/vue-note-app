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
      // default: 'default message'
    }
  }
}
</script>

<!--scoped ограничивает применение стилей к конкретному компоненту-->
<style scoped>

</style>
