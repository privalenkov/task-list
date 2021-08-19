<template>
  <div class="c-design-by">
    <div>Dev by <a href="https://github.com/privalenkov" target="_blank">Kirill Privalenkov</a></div>
    <div>Design by <a href="https://www.behance.net/santhoshsivan" target="_blank">Santhoshsivan Balanagarajan</a></div>
  </div>
</template>

<script>
export default {
  name: 'DesignBy'
}
</script>

<style lang="scss" scoped>
.c-design-by {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #a3a8aa;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 0 20px 20px 0;
  & ::selection, a::selection {
      background: #946dff;
      color: #fff;
  }
  a {
    text-decoration: none;
    color: #495153;
    &:hover {
      color: #191c1d;
      text-decoration: underline;
    }
  }
}
</style>
