<template>
  <div id="draggable" class="c-task">
    <div class="c-task__title">
      <span class="c-task__icon">{{ task.icon }}</span>
      <span>{{ task.title }}</span>
    </div>
    <div class="c-task__btn-more">
      <div class="c-task__dots" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({ id: 0, icon: '', title: 'Untitle', date: new Date() })
    }
  }
}
</script>

<style lang="scss" scoped>
.c-task {
  font-family: 'Roboto', sans-serif;
  background: #fff;
  padding: 20px 20px 20px 20px;
  box-shadow: 0 5px 20px -2px #c5d7e9;
  width: 280px;
  border-radius: 4px;
  transition: .1s;
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 80% auto;
  column-gap: 10px;
  &.drag {
    position: absolute;
  }
  &.start-drag {
    height: 0;
    padding: 0;
    transform: scale(0.8);
    opacity: 0;
  }
  &:hover {
    background: #fafdff;
  }
  &:hover &__btn-more {
    opacity: 1;
  }
  &__title {
    word-break: break-word;
    pointer-events: none;
    &::selection, span::selection {
      background: #946dff;
      color: #fff;
    }
  }
  &__btn-more {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    background: #d4e3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: .4s;
  }
  &__dots {
    width: 3px;
    height: 3px;
    background: #ffffff;
    border-radius: 50%;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      width: 3px;
      height: 3px;
      left: -6px;
      border-radius: 50%;
      background: #ffffff;
    }
    &::after {
      position: absolute;
      right: -6px;
      border-radius: 50%;
      content: '';
      width: 3px;
      height: 3px;
      background: #ffffff;
    }
  }
}
</style>
