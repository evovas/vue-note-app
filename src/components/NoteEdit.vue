<template>
  <div v-on:keyup.esc="cancelEdit">
    <label for="note-title" class="visually-hidden">Title</label>
    <input v-model="note.title" type="text" id="note-title">
    <label for="note-description" class="visually-hidden">Description</label>
    <textarea v-model="note.description" id="note-description"></textarea>
    <div class="buttons-wrapper">
      <button @click="editNote" class="btn btnPrimary" type="button">Confirm</button>
      <button @click="cancelEdit" class="btn btnDanger" type="button">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteEdit",
  data() {
    return {
      previousTitle: this.note.title,
      previousDescription: this.note.description,
    };
  },
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    cancelEdit() {
      this.note.title = this.previousTitle;
      this.note.description = this.previousDescription;
      this.$emit('stop-edit');
    },
    editNote() {
      this.note.date = new Date().toLocaleString();
      this.$emit('stop-edit');
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons-wrapper {
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  :not(:last-child) {
    margin-right: 30px;
  }
}
</style>
