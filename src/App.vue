<template>
  <div class="wrapper">

    <div class="wrapper-content">
      <section>
        <div class="container">
          <!--Двоеточие байндит что-то из data, если без двоеточия, то можно передавать простые значения-->
          <Message v-if="message" :message="message"/>

          <!--new note-->
          <NewNote
            :note="note"
            @add-note="addNote"
          />

          <div class="app-header">
            <!--title-->
            <h1>{{ title }}</h1>

            <!--search-->
            <Search
              :value="search"
              placeholder="Find your note"
              @search="search = $event"
            />

            <!--control icons-->
            <div class="icons">
              <svg :class="{ active: grid}" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid}" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>
          <!--note list-->
          <Notes
            :notes="notesFilter"
            :grid="grid"
            @remove-note="removeNote"
          />
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import Message from "@/components/Message";
import NewNote from "@/components/NewNote";
import Notes from "@/components/Notes";
import Search from "@/components/Search";

export default {
  components: {
    Message,
    NewNote,
    Notes,
    Search,
  },
  data() {
    return {
      title: 'Notes App',
      search: '',
      message: null,
      grid: true,
      note: {
        title: '',
        description: '',
      },
      notes: [
        {
          title: 'First Note',
          description: 'Description for first note',
          date: new Date().toLocaleString(),
        },
        {
          title: 'Second Note',
          description: 'Description for second note',
          date: new Date().toLocaleString(),
        },
        {
          title: 'Third Note',
          description: 'Description for third note',
          date: new Date().toLocaleString(),
        },
      ],
    }
  },
  computed: {
    notesFilter() {
      let array = this.notes;
      let search = this.search;
      if (!search) {
        return array;
      }
      search = search.trim().toLowerCase();
      array = array.filter((item) => {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      })
      return array;
    }
  },
  methods: {
    addNote() {
      // console.log(this.note);
      const {title, description} = this.note;
      if (title === '') {
        this.message = 'Title can`t be blank';
        return;
      }
      this.notes.push({
        title,
        description,
        date: new Date().toLocaleString(),
      });

      this.message = null;
      this.note.title = '';
      this.note.description = '';
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    }
  }
}
</script>

<style lang="scss">
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #5f49de;
    font-size: 32px;
  }

  svg {
    color: #999999;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 12px;
    }
    &.active {
      color: #5f49de;
    }
  }
}
</style>
