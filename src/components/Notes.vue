<template>
  <div class="notes">
    <Note
        v-for="(note, id) in notes"
        :key="id"
        :note="note"
        :grid="grid"
        @remove-note="removeNote"
    />
  </div>
</template>

<script>
import Note from "@/components/Note";
export default {
  name: "Notes",
  components: {Note},
  props: {
    notes: {
      type: Array,
      required: true,
    },
    grid: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    removeNote(id) {
      this.$emit('remove-note', id);
    },
  },
};
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
</style>
