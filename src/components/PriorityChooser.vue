<template>
  <div class="priority">
    <p>Priority</p>
    <div class="priority__buttons">
      <button class="priority__button priority__button--down" type="button">
        <span class="visually-hidden">Low Priority</span>
        <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5757 1.42426C11.81 1.18995 12.1899 1.18995 12.4243 1.42426L22.5757 11.5757C22.81 11.81 22.8101 12.1899 22.5757 12.4243L12.4243 22.5757C12.19 22.81 11.8101 22.8101 11.5757 22.5757L1.42426 12.4243C1.18995 12.19 1.18995 11.8101 1.42426 11.5757L11.5757 1.42426Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 16L16 12M12 16L8 11.8333M12 16L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="priority__button priority__button--up" type="button">
        <span class="visually-hidden">Medium Priority</span>
        <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5757 1.42426C11.81 1.18995 12.1899 1.18995 12.4243 1.42426L22.5757 11.5757C22.81 11.81 22.8101 12.1899 22.5757 12.4243L12.4243 22.5757C12.19 22.81 11.8101 22.8101 11.5757 22.5757L1.42426 12.4243C1.18995 12.19 1.18995 11.8101 1.42426 11.5757L11.5757 1.42426Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 7L16 11M12 7L8 11.1667M12 7L12 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="priority__button priority__button--high" type="button">
        <span class="visually-hidden">High Priority</span>
        <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5757 1.42426C11.81 1.18995 12.1899 1.18995 12.4243 1.42426L22.5757 11.5757C22.81 11.81 22.8101 12.1899 22.5757 12.4243L12.4243 22.5757C12.19 22.81 11.8101 22.8101 11.5757 22.5757L1.42426 12.4243C1.18995 12.19 1.18995 11.8101 1.42426 11.5757L11.5757 1.42426Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 16.01L12.01 15.9989" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriorityChooser',

}
</script>

<style lang="scss">
.priority {
  padding: 0 10px;
  &__buttons {
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 16px;
    margin: 0 0 10px;
  }

  &__button {
    width: 48px;
    height: 48px;
    padding: 0;

    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;

    color: #999999;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 20px;
    }
    &--down {
      &.active {
        color: #7bd782;
      }
    }
    &--up {
      &.active {
        color: #fed330;
      }
    }
    &--high {
      &.active {
        color: #fc5c65;
      }
    }
  }
}
</style>
