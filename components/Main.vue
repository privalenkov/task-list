<template>
  <main>
    <transition name="modal">
      <Modal v-show="showModal" @close="showModal = false" />
    </transition>
    <div class="l-container" @scroll="columnFixedScroll">
      <TableTask :is-fixed="isFixed" @showModal="showModal = true" />
    </div>
  </main>
</template>

<script>
import TableTask from '@/components/TableTask'
import Modal from '@/components/Modal'

export default {
  components: {
    TableTask, Modal
  },
  data: () => ({
    isFixed: false,
    showModal: false
  }),
  methods: {
    columnFixedScroll (e) {
      if (e.target.scrollTop > 32) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  overflow: hidden;
}
.l-container {
  height: 100%;
  padding: 30px 0 30px 30px;
  background: #f6f8fa;
  overflow: auto;
  /* width */
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    margin: 15px 15px 15px 15px;
    background: #bdc5ce;
    border-radius: 4px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #946dff;
    border-radius: 4px;
  }
}
</style>

<style lang="scss">
.icons::after {
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  background-image: url('/icons/icons-spritesheet.svg');
  background-repeat: no-repeat;
  content: '';
}
</style>
