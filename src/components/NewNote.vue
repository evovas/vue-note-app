<template>
  <div class="new-note">
    <label for="note-title">Title</label>
    <input v-model="note.title" type="text" id="note-title">
    <label for="note-description">Description</label>
    <textarea v-model="note.description" id="note-description"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  name: "NewNote",
  props: {
    note: {
      type: Object,
      required: true,
    }
  },
  methods: {
    addNote() {
      this.$emit('add-note', this.note);
    }
  }
}
</script>

<style lang="scss">
  .new-note {
    text-align: center;
    margin-bottom: 36px;

    textarea {
      margin-bottom: 20px;
    }
  }
</style>
