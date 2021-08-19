<template>
  <div class="c-modal">
    <div class="c-modal__l-container">
      <div class="c-modal__header">
        <slot name="header">
          default header
        </slot>
      </div>

      <div class="c-modal__body">
        <slot name="body">
          default body
        </slot>
      </div>

      <div class="c-modal__footer">
        <slot name="footer">
          default footer
          <button class="c-modal__default-button" @click="$emit('close')">
            OK
          </button>
        </slot>
      </div>
    </div>
    <div class="c-modal__bg" @click="$emit('close')" />
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style lang="scss" scoped>
.c-modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: opacity .3s ease;
  z-index: 9997;
  &__bg {
    position: fixed;
    width: 100%;
    cursor: pointer;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9997;
  }
  &__mask-modal {
    z-index: 9998;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
  }
  &__l-container {
    width: 300px;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
    transition: all 0.3s ease;
    font-family: "Roboto", sans-serif;
    position: fixed;
    z-index: 9998;
  }
  &__header {
    h3 {
      margin-top: 0;
      color: #42b983;
    }
  }
  &__body {
    margin: 20px 0;
  }
  &__default-button {
    cursor: pointer;
    float: right;
  }
}
</style>

<style lang="scss" scoped>
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
