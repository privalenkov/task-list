<template>
  <div id="table">
    <transition-group name="columns" tag="div" class="c-table-task">
      <div
        v-for="(column, index) in tableColumnData"
        id="droppable-column"
        :key="column.id"
        class="c-table-task__column"
      >
        <div class="c-table-task__l-container">
          <div class="c-table-task__column-title" @mousedown="mouseDownColumn($event, column)" @mouseover="overHandler(index)" @mouseleave="leaveHandler">
            <span v-if="currentColumnId === index && currentColumnTitle">+ New Task</span>
            <div v-else>
              {{ column.title }} <span class="c-table-task__task-count">({{ column.tasks.length }})</span>
            </div>
          </div>
          <div class="c-table-task__btn-more" @click="$emit('showModal')">
            <div class="btn-more_dots" />
          </div>
        </div>
        <transition-group name="tasks" tag="div" class="c-table-task__task-group">
          <div
            v-for="task in column.tasks"
            id="droppable-task"
            :key="task.id"
            class="c-table-task__task"
            @mousedown="mouseDownTask($event, column, task)"
            @mouseup="mouseDrop($event, column, task)"
          >
            <Task :task="task" />
          </div>
        </transition-group>
      </div>
    </transition-group>
    <div class="c-table-task__column">
      <div id="add-column" class="c-table-task__column-title" @click="addColumn">
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
  props: {
    isFixed: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    currentColumnId: 0,
    currentColumnTitle: false,
    target: '',
    targetClone: '',
    shiftCoords: {},
    isDrag: false,
    isDrop: false,
    currentDroppableColumn: null,
    urrentDroppableTask: null,
    currentTask: null,
    currentColumn: null,
    currentDrop: null,
    requestAnimationFrameTranslate: undefined,
    requestAnimationFrameRotate: undefined,
    targetRotate: {},
    targetTranslate: {},
    needForRAF: true,
    isMouseStop: false,
    mouseStopTimer: undefined,
    tableTaskData: [
      { id: 0, icon: '🤖', title: 'hi me', date: new Date(), status: 'Done' },
      { id: 1, icon: '', title: 'cow how to kak', date: new Date(), status: 'Done' },
      { id: 2, icon: '', title: 'hello world', date: new Date(), status: 'Done' },
      { id: 3, icon: '', title: 'helloworldhelloworldhelloworldhelloworldhelloworld hello world helloworld helloworld helloworld helloworldhello world hello worldhelloworldhello world', date: new Date(), status: 'Done' },
      { id: 4, icon: '🤖', title: 'hi me', date: new Date(), status: 'To Do' },
      { id: 5, icon: '', title: 'cow how to kak', date: new Date(), status: 'To Do' },
      { id: 6, icon: '', title: 'hello world', date: new Date(), status: 'To Do' },
      { id: 7, icon: '', title: 'afasdfsdaf', date: new Date(), status: 'To Do' },
      { id: 8, icon: '🤖', title: 'c6', date: new Date(), status: 'To Do' },
      { id: 9, icon: '', title: 'cow ga', date: new Date(), status: 'To Do' },
      { id: 10, icon: '🤖', title: 'hi me', date: new Date(), status: 'Doing' },
      { id: 11, icon: '', title: 'cow ga', date: new Date(), status: 'Doing' },
      { id: 12, icon: '', title: 'hello world', date: new Date(), status: 'To Do' },
      { id: 13, icon: '', title: 'afasdfsdaf', date: new Date(), status: 'To Do' },
      { id: 14, icon: '🤖', title: 'c6', date: new Date(), status: 'To Do' },
      { id: 15, icon: '', title: 'cow ga', date: new Date(), status: 'To Do' },
      { id: 16, icon: '🤖', title: 'hi me', date: new Date(), status: 'Doing' },
      { id: 17, icon: '', title: 'cow ga', date: new Date(), status: 'Doing' },
      { id: 18, icon: '', title: 'hello world', date: new Date(), status: 'To Do' },
      { id: 19, icon: '', title: 'afasdfsdaf', date: new Date(), status: 'To Do' },
      { id: 20, icon: '🤖', title: 'c6', date: new Date(), status: 'To Do' },
      { id: 21, icon: '', title: 'cow ga', date: new Date(), status: 'To Do' },
      { id: 22, icon: '🤖', title: 'hi me', date: new Date(), status: 'Doing' },
      { id: 23, icon: '', title: 'cow ga', date: new Date(), status: 'Doing' }
    ],
    tableColumnData: [
      {
        id: 0,
        title: 'Done',
        tasks: [
          { id: 0, icon: '🤖', title: 'hi me', date: new Date() },
          { id: 1, icon: '', title: 'cow how to kak', date: new Date() },
          { id: 2, icon: '', title: 'hello world', date: new Date() },
          { id: 3, icon: '', title: 'helloworldhelloworldhelloworldhelloworldhelloworld hello world helloworld helloworld helloworld helloworldhello world hello worldhelloworldhello world', date: new Date() },
          { id: 4, icon: '🤖', title: 'hi me', date: new Date() },
          { id: 5, icon: '', title: 'cow how to kak', date: new Date() }
        ]
      },
      {
        id: 1,
        title: 'To Do',
        tasks: [
          { id: 6, icon: '', title: 'hello world', date: new Date() },
          { id: 7, icon: '', title: 'afasdfsdaf', date: new Date() },
          { id: 8, icon: '🤖', title: 'c6', date: new Date() },
          { id: 9, icon: '', title: 'cow ga', date: new Date() },
          { id: 10, icon: '🤖', title: 'hi me', date: new Date() },
          { id: 11, icon: '', title: 'cow ga', date: new Date() },
          { id: 12, icon: '', title: 'hello world', date: new Date() },
          { id: 13, icon: '', title: 'afasdfsdaf', date: new Date() }
        ]
      },
      {
        id: 2,
        title: 'Doing',
        tasks: [
          { id: 14, icon: '🤖', title: 'c6', date: new Date() },
          { id: 15, icon: '', title: 'cow ga', date: new Date() },
          { id: 16, icon: '🤖', title: 'hi me', date: new Date() },
          { id: 17, icon: '', title: 'cow ga', date: new Date() },
          { id: 18, icon: '', title: 'hello world', date: new Date() },
          { id: 19, icon: '', title: 'afasdfsdaf', date: new Date() },
          { id: 20, icon: '🤖', title: 'c6', date: new Date() },
          { id: 21, icon: '', title: 'cow ga', date: new Date() },
          { id: 22, icon: '🤖', title: 'hi me', date: new Date() },
          { id: 23, icon: '', title: 'cow ga', date: new Date() }
        ]
      }
    ]
  }),
  watch: {
    isFixed () {
      this.fixedTitleColumn()
    }
  },
  beforeDestroy () {
    window.cancelAnimationFrame(this.requestAnimationFrameTranslate)
    this.requestAnimationFrameTranslate = undefined
  },
  updated () {
    this.fixedTitleColumn()
  },
  methods: {
    addColumn () {
      this.tableColumnData.push({ id: 3, title: 'asdsa', tasks: [] })
    },
    fixedTitleColumn () {
      const $title = document.querySelectorAll('.c-table-task__l-container')
      const $addcolumn = document.querySelector('#add-column')
      const arr = []
      if (this.isFixed) {
        arr.forEach.call($title, function (div) {
          div.style.setProperty('position', 'sticky')
          div.style.setProperty('top', '-30px')
        })
        $addcolumn.style.setProperty('position', 'sticky')
        $addcolumn.style.setProperty('top', '-30px')
      } else {
        arr.forEach.call($title, function (div) {
          div.style.setProperty('position', 'none')
          div.style.setProperty('top', 'initial')
        })
        $addcolumn.style.setProperty('position', 'none')
        $addcolumn.style.setProperty('top', 'initial')
      }
    },
    getLengthFromColumn (title) {
      return this.tableTaskData.filter(e => e.status === title).length
    },
    overHandler (idx) {
      this.currentColumnId = idx
      this.currentColumnTitle = true
    },
    leaveHandler () {
      this.currentColumnTitle = false
    },
    mouseDownColumn (e, column) {
      const top = e.target.getBoundingClientRect().top
      const left = e.target.getBoundingClientRect().left
      const shiftX = e.clientX - left
      const shiftY = e.clientY - top
      this.shiftCoords = { shiftX, shiftY }
      e.target.classList.add('drag')
      this.moveAt(e.target, e.pageX)
    },
    mouseDownTask (e, column, task) {
      if (e.target.id === 'draggable') {
        this.isDrop = false
        this.currentColumn = column
        this.currentTask = task
        const top = e.target.getBoundingClientRect().top
        const left = e.target.getBoundingClientRect().left
        const shiftX = e.clientX - left
        const shiftY = e.clientY - top

        this.shiftCoords = { shiftX, shiftY }
        this.targetClone = e.target.cloneNode(true)
        e.target.classList.add('start-drag')
        this.targetClone.style.setProperty('z-index', '999')
        this.targetClone.style.setProperty('box-shadow', '0 5px 25px -5px #c5d7e9')
        this.targetClone.style.setProperty('pointer-events', 'none')
        this.targetClone.classList.add('drag')
        document.body.prepend(this.targetClone)
        this.isDrag = true
        this.target = e
        this.moveAt(this.targetClone, e.pageX, e.pageY)
        this.targetClone.style.transform = `translate(${this.targetTranslate.x}px, ${this.targetTranslate.y}px)`
        this.targetClone.style.setProperty('transition', '.1s')
        document.addEventListener('mousemove', this.mouseMove)
        document.addEventListener('mouseup', this.mouseUp)
        // this.requestAnimationFrameRotate = window.requestAnimationFrame(this.updateRotate)
      }
    },
    updateRotate () {
      if (this.isDrag) {
        requestAnimationFrame(this.updateRotate)
      }
      this.targetClone.style.transform = `rotateX(${this.targetRotate.x}deg) rotateY(${this.targetRotate.y}deg)`
    },
    updateTranslate () {
      this.needForRAF = true
      this.targetClone.style.transform = `translate(${this.targetTranslate.x}px, ${this.targetTranslate.y}px)`
    },
    mouseMove (e) {
      if (this.isDrag) {
        e.preventDefault()
        this.moveAt(this.targetClone, e.pageX, e.pageY)
        // this.rotate(this.targetClone, e.pageX, e.pageY)

        if (this.needForRAF) {
          this.needForRAF = false
          this.requestAnimationFrameTranslate = window.requestAnimationFrame(this.updateTranslate)
        }

        this.targetClone.hidden = true
        const elemBelow = document.elementFromPoint(e.clientX, e.clientY)
        this.targetClone.hidden = false

        if (!elemBelow) { return }
        const droppableBelowColumn = elemBelow.closest('#droppable-column')
        const droppableBelowTask = elemBelow.closest('#droppable-task')

        if (this.currentDroppableColumn !== droppableBelowColumn) {
          if (this.currentDroppableColumn) {
            console.log('leave')
            this.currentDroppableColumn.style.setProperty('background', 'none')
          }
          this.currentDroppableColumn = droppableBelowColumn
          if (this.currentDroppableColumn) {
            console.log('enter')
            this.currentDroppableColumn.style.setProperty('background', '#eef3f7')
            // this.onDrop()
          }
        }
        if (this.currentDroppableTask !== droppableBelowTask) {
          if (this.currentDroppableTask) {
            const over = document.querySelector('.over')
            if (over) {
              over.remove()
            }
            this.currentDroppableTask.style.transform = 'initial'
            this.currentDroppableTask.style.borderBottom = 'initial'
          }
          this.currentDroppableTask = droppableBelowTask
          if (this.currentDroppableTask) {
            const overDiv = document.createElement('div')
            overDiv.classList.add('over')
            this.currentDroppableTask.appendChild(overDiv)
            this.currentDroppableTask.style.transform = 'scale(.98)'
          }
        }
      }
    },
    mouseUp (e) {
      e.preventDefault()
      if (this.isDrag) {
        if (!this.isDrop) { this.target.target.classList.remove('start-drag') }
        // this.target.target.classList.remove('start-drag')
        this.targetClone.parentNode.removeChild(this.targetClone)
        window.cancelAnimationFrame(this.requestAnimationFrameTranslate)
        this.requestAnimationFrameTranslate = undefined
        this.needForRAF = true
        // this.target.classList.remove('drag')
        // this.target.style.setProperty('top', 'initial')
        // this.target.style.setProperty('left', 'initial')
        document.removeEventListener('mousemove', this.mouseMove)
        // console.log(e.target.onmouseup)
        // e.target.onmouseup = null
        this.isDrag = false
      }
    },
    moveAt (target, pageX, pageY = null) {
      const trnslX = pageX - this.shiftCoords.shiftX
      if (pageY) {
        const trnslY = pageY - this.shiftCoords.shiftY
        this.targetTranslate = { x: trnslX, y: trnslY }
        return
      }
      this.targetTranslate = { x: trnslX }
    },
    onDrop () {
      // const itemID = e.dataTransfer.getData('itemID')
      const item = this.tableTaskData.find(itm => itm.id === +this.currentTask.id)
      // e.target.style.top = `${e.pageY - coordsY}px`
      // e.target.style.left = `${e.pageX - coordsX}px`
      item.status = this.currentDrop.status
    },
    mouseDrop (e, column, task) {
      if (this.isDrag) {
        const over = document.querySelector('.over')
        if (over) {
          over.remove()
        }
        const currentIndex = this.currentColumn.tasks.indexOf(this.currentTask)
        this.currentColumn.tasks.splice(currentIndex, 1)
        const dropIndex = column.tasks.indexOf(task)
        if (this.currentColumn.title === column.title) {
          this.target.target.classList.remove('start-drag')
        }
        column.tasks.splice(dropIndex + 1, 0, this.currentTask)
        this.isDrop = true
      }
    },
    rotate (target, x, y) {
      const targetPosX = target.getBoundingClientRect().x + (target.getBoundingClientRect().width / 2)
      const targetPosY = target.getBoundingClientRect().y + (target.getBoundingClientRect().height / 2)
      const rotateY = Math.max(Math.min((targetPosX - x) / 2, 30), -30)
      const rotateX = Math.max(Math.min((targetPosY - y) / 2, 30), -30)
      this.targetRotate = { x: rotateX, y: rotateY }
    }
  }
}
</script>

<style lang="scss" scoped>
#table {
  display:flex;
}
.c-table-task {
  // width: 100%;
  display: flex;
  column-gap: 25px;
  margin-right: 30px;
  &__task {
    margin: 10px 0 10px 0;
    // overflow: hidden;
  }
  &__task-count {
    font-weight: 400;
    color: #9f9ca1;
  }
  &__column {
    min-width: 280px;
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
    transition: color .5s;
    width: 280px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.drag {
      position: absolute;
    }
  }
  &__l-container {
    width: 280px;
    height: 40px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    z-index: 9;
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

<style lang="scss" scoped>
.tasks-item {
  display: block;
  // margin-right: 10px;
}
.tasks-enter-active, .tasks-leave-active {
  transition: all .2s;
  .c-task {
    background: #eaeff3;
  }
}
.tasks-enter {
  height: 0;
  padding: 0;
  transform: scale(.9);
}

.columns-item {
  display: inline-block;
  margin-right: 10px;
}
.columns-enter-active, .columns-leave-active {
  transition: all .2s;
}
.columns-enter, .columns-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}
</style>

<style lang="scss">
.over {
  height: 5px;
  background: #d8d3eb;
  margin: 10px 10px 10px 10px;
  border-radius: 100px;
  transition: all 1s;
  animation: over-show .4s forwards;

  @keyframes over-show {
    0% {
      height: 0;
      margin: 0;
    }
    100% {
      height: 5px;
      margin: 10px 10px 10px 10px;
    }
  }
}
</style>
