<template>
  <div
      class="note"
      :class="{
          full: !grid,
          lowPriority: note.isLowPriority,
          mediumPriority: note.isMediumPriority,
          highPriority: note.isHighPriority,
      }"
  >
    <div v-if="!isEdit">
      <div class="note-header" :class="{ full: !grid }">
        <h2 @click="isEdit = true">{{ note.title }}</h2>
        <p @click="removeNote(note.id)">x</p>
      </div>
      <div class="note-body">
        <p>{{ note.description }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>

    <NoteEdit
        :note="note"
        v-if="isEdit"
        @stop-edit="stopEdit"
    />
  </div>

</template>

<script>
import NoteEdit from "@/components/NoteEdit";
export default {
  name: "Note",
  components: {NoteEdit},
  data() {
    return {
      isEdit: false,
    }
  },
  props: {
    note: {
      type: Object,
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
    stopEdit() {
      this.isEdit = false;
    },
  },
}
</script>

<style lang="scss">
.note {
  width: 46%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(.02,.01,.47,1);
  box-shadow: 0 30px 30px rgba(0,0,0,.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0,0,0,0.04);
    transform: translate(0, -6px);
  }
  &.full {
    width: 100%;
    text-align: center;
  }
  &.lowPriority {
    background-color: rgba(123, 215, 130, 0.7);
  }
  &.mediumPriority {
    background-color: rgba(254, 211, 48, 0.6);
  }
  &.highPriority {
    background-color: rgba(252, 92, 101, 0.7);
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.full {
    justify-content: center;

    h2 {
      margin-right: 12px;
    }
  }

  h2 {
    color: #402caf;
    font-size: 22px;
    cursor: pointer;
  }
  p {
    margin: 0;
    color: orangered;
    cursor: pointer;
  }
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}
</style>
