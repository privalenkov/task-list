<template>
  <div class="c-table-task">
    <div
      v-for="(column, index) in tableColumnData"
      :key="index"
      class="c-table-task__column"
      @drop="onDrop($event, column.title)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div class="c-table-task__l-container">
        <div class="c-table-task__column-title" @mouseover="overHandler(index)" @mouseleave="leaveHandler">
          <span v-if="currentColumnId === index && currentColumnTitle">+ New Task</span>
          <div v-else>
            {{ column.title }} <span class="c-table-task__task-count">({{ getTaskforStatus(column.title).length }})</span>
          </div>
        </div>
        <div class="c-table-task__btn-more">
          <div class="btn-more_dots" />
        </div>
      </div>
      <div
        v-for="task in getTaskforStatus(column.title)"
        :key="task.id"
        draggable="true"
        class="c-table-task__task"
        @dragstart="startDrag($event, task)"
        @dragend="endDrag($event)"
        @drag="dragging($event)"
      >
        <Task :task="task" />
      </div>
    </div>
    <div class="c-table-task__column">
      <div class="c-table-task__column-title">
        <span>Add Column</span>
      </div>
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task'
// [
//   {
//     id: 0,
//     title: 'Done',
//     tasks: [
//       { id: 0, icon: '🤖', title: 'hi me', date: new Date(), status: 'Done' },
//       { id: 1, icon: '', title: 'cow how to kak', date: new Date(), status: 'Done' },
//       { id: 2, icon: '', title: 'hello world', date: new Date(), status: 'Done' },
//       { id: 3, icon: '', title: '5351341343144413341', date: new Date(), status: 'Done' }
//     ]
//   },
//   {
//     id: 1,
//     title: 'To Do',
//     tasks: [
//       { id: 0, icon: '🤖', title: 'hi me', date: new Date(), status: 'To Do' },
//       { id: 1, icon: '', title: 'cow how to kak', date: new Date(), status: 'To Do' },
//       { id: 2, icon: '', title: 'hello world', date: new Date(), status: 'To Do' },
//       { id: 3, icon: '', title: 'afasdfsdaf', date: new Date(), status: 'To Do' },
//       { id: 4, icon: '🤖', title: 'c6', date: new Date(), status: 'To Do' },
//       { id: 5, icon: '', title: 'cow ga', date: new Date(), status: 'To Do' }
//     ]
//   },
//   {
//     id: 2,
//     title: 'Doing',
//     tasks: [
//       { id: 0, icon: '🤖', title: 'hi me', date: new Date(), status: 'Doing' },
//       { id: 1, icon: '', title: 'cow ga', date: new Date(), status: 'Doing' }
//     ]
//   }
// ]

export default {
  name: 'TableTask',
  components: {
    Task
  },
  data: () => ({
    currentColumnId: 0,
    currentColumnTitle: false,
    tableTaskData: [
      { id: 0, icon: '🤖', title: 'hi me', date: new Date(), status: 'Done' },
      { id: 1, icon: '', title: 'cow how to kak', date: new Date(), status: 'Done' },
      { id: 2, icon: '', title: 'hello world', date: new Date(), status: 'Done' },
      { id: 3, icon: '', title: '5351341343144413341', date: new Date(), status: 'Done' },
      { id: 4, icon: '🤖', title: 'hi me', date: new Date(), status: 'To Do' },
      { id: 5, icon: '', title: 'cow how to kak', date: new Date(), status: 'To Do' },
      { id: 6, icon: '', title: 'hello world', date: new Date(), status: 'To Do' },
      { id: 7, icon: '', title: 'afasdfsdaf', date: new Date(), status: 'To Do' },
      { id: 8, icon: '🤖', title: 'c6', date: new Date(), status: 'To Do' },
      { id: 9, icon: '', title: 'cow ga', date: new Date(), status: 'To Do' },
      { id: 10, icon: '🤖', title: 'hi me', date: new Date(), status: 'Doing' },
      { id: 11, icon: '', title: 'cow ga', date: new Date(), status: 'Doing' }
    ],
    tableColumnData: [
      { id: 0, title: 'Done' },
      { id: 1, title: 'To Do' },
      { id: 2, title: 'Doing' }
    ]
  }),
  computed: {
    getColumnsTask () {
      const uniq = {}
      return this.tableTaskData.filter(e => !uniq[e.status] && (uniq[e.status] = true))
    }
  },
  methods: {
    getTaskforStatus (status) {
      return this.tableTaskData.filter(e => e.status === status)
    },
    overHandler (idx) {
      this.currentColumnId = idx
      this.currentColumnTitle = true
    },
    leaveHandler () {
      this.currentColumnTitle = false
    },
    dragging (e) {
      e.target.style.top = `${e.clientY - e.target.style.height / 2 - 40}px`
      e.target.style.left = `${e.clientX - e.target.style.width / 2 - 130}px`
    },
    startDrag (e, item) {
      e.target.classList.add('start-drag')
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('coordsX', e.offsetX)
      e.dataTransfer.setData('coordsY', e.offsetY)
      e.dataTransfer.setData('itemID', item.id)
    },
    endDrag (e) {
      // const ghostImg = document.querySelector('#ghostImg')
      // ghostImg.style.zIndex = '99'
      // ghostImg.style.top = e.clientY + 'px'
      // ghostImg.style.left = e.clientX + 'px'
      e.target.classList.remove('start-drag')
      e.target.style.setProperty('top', 'initial')
      e.target.style.setProperty('left', 'initial')
    },
    onDrop (e, status) {
      const itemID = e.dataTransfer.getData('itemID')
      // const coordsX = e.dataTransfer.getData('coordsX')
      // const coordsY = e.dataTransfer.getData('coordsY')
      const item = this.tableTaskData.find(itm => itm.id === +itemID)
      // e.target.style.top = `${e.pageY - coordsY}px`
      // e.target.style.left = `${e.pageX - coordsX}px`
      item.status = status
    }
  }
}
</script>

<style lang="scss" scoped>
.c-table-task {
  width: 100%;
  display: flex;
  column-gap: 25px;
  &__column {
    transition: 2;
  }
  &__task {
    margin: 10px 0 10px 0;
    &.start-drag {
      position: absolute;
    }
  }
  &__task-count {
    font-weight: 400;
    color: #9f9ca1;
  }
  &__btn-more {
    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .4s;
    &:hover {
      background: #946dff;
      & .btn-more_dots {
        background: #fff;
        &::before, &::after  {
          background: #fff;
        }
      }
    }
    & .btn-more_dots {
      width: 3px;
      height: 3px;
      background: #946dff;
      border-radius: 50%;
      position: relative;
      &::before {
        position: absolute;
        content: '';
        width: 3px;
        height: 3px;
        left: -7px;
        border-radius: 50%;
        background: #946dff;
      }
      &::after {
        position: absolute;
        right: -7px;
        border-radius: 50%;
        content: '';
        width: 3px;
        height: 3px;
        background: #946dff;
      }
    }
  }
  &__column-title {
    cursor: pointer;
    user-select: none;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
    border-radius: 4px;
    width: 280px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__l-container {
    width: 280px;
    height: 40px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }
  &__column-title {
    color: #946dff;
    background: #eceafa;
    transition: background, color .4s;
    &:hover {
      background: #946dff;
      color: #fff;
    }
  }
}
</style>
