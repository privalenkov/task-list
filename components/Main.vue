<template>
  <main>
    <div class="l-container">
      <TableTask />
    </div>
  </main>
</template>

<script>
import TableTask from '@/components/TableTask'

export default {
  components: {
    TableTask
  }
}
</script>

<style lang="scss" scoped>
.l-container {
  height: 100%;
  padding: 30px 0 0 30px;
  background: #f6f8fa;
}
</style>
