<template>
  <div class="l-container">
    <Navbar />
    <Main />
    <DesignByCard />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
:active, :hover, :focus {
  outline: 0;
  outline-offset: 0;
}
</style>

<style lang="scss" scoped>
.l-container {
  display: grid;
  grid-template-rows: 100px auto;
  height: 100vh;
}
</style>
