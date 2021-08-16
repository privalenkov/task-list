<template>
  <header class="c-header">
    <div class="c-header__l-cap">
      <a href="" class="c-header__logo"><Logo /></a>
      <nav class="c-header__l-grid">
        <ul>
          <li>
            <div class="c-header__profile-image">
              <a href="">
                <img src="/img/profile.jpg">
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="c-header__l-menu">
      <Dropdown :options="dropdownData" />
      <nav class="c-header__l-grid">
        <ul>
          <li>point1</li>
          <li>point2</li>
          <li>point3</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Dropdown from '@/components/inputDropdown'
import Logo from '@/components/Logo'

export default {
  name: 'Navbar',
  components: {
    Dropdown, Logo
  },
  data: () => ({
    dropdownData: [
      { title: 'Board View', value: 'Board View' },
      { title: 'Table View', value: 'Table View' },
      { title: 'List View', value: 'List View' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.c-header {
  z-index: 9999;
  &__profile-image {
    width: 37px;
    overflow: hidden;
    height: 37px;
    user-select: none;
    background: #946dff;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__l-cap, &__l-menu {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 30px 0 30px;
    justify-content: space-between;
  }
  &__l-cap {
    background: #865ff5;
  }
  &__l-menu {
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2);
    background: #fff;
  }
  &__logo {
    color: #fff;
    text-decoration: none;
  }

  &__l-grid {
    ul {
      display: flex;
      column-gap: 20px;
      margin: 0;
      list-style: none;
    }
  }
}

</style>
