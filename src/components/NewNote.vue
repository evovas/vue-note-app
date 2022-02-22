<template>
  <div class="new-note">
    <div class="new-note__header">
      <div class="new-note__title-wrapper">
        <label for="note-title">Title</label>
        <input v-model="note.title" type="text" id="note-title">
      </div>
      <PriorityChooser />
    </div>
    <label for="note-description">Description</label>
    <textarea v-model="note.description" id="note-description"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
import PriorityChooser from "@/components/PriorityChooser";

export default {
  name: "NewNote",
  components: {
    PriorityChooser,
  },
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

    &__title-wrapper {
      flex-grow: 1;
    }

    &__header {
      display: flex;
    }

    textarea {
      margin-bottom: 20px;
    }
  }
</style>
