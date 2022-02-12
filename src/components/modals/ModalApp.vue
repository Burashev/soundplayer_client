<template>
  <div class="modal-block" @click.self="closeModal">
    <div class="modal">
      <div class="modal__close">
        <span class="modal__close__button" @click="closeModal"></span>
      </div>
      <div class="modal__header">
        <h2>
          <slot name="header"></slot>
        </h2>
      </div>
      <div class="modal__body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalApp",
  methods: {
    closeModal() {
      this.$store.dispatch('modal/closeModal');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-block {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  .modal {
    max-width: 500px;
    width: 100%;
    max-height: 400px;
    height: 100%;
    background-color: #424244;
    border-radius: 7px;
    padding: 20px 30px;

    &__header {
      h2 {
        color: white;
      }
    }

    &__close {
      display: flex;
      flex-direction: row-reverse;

      &__button {
        position: relative;
        width: 20px;
        height: 20px;
        cursor: pointer;

        &:after, &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 3px;
          background-color: white;
          border-radius: 7px;
          left: 0;
          top: 9px;
        }

        &:after {
          transform: rotate(45deg);
        }

        &:before {
          transform: rotate(-45deg);
        }
      }
    }
  }
}

</style>