<template>
  <header class="c-header">
    <div class="c-header__l-cap">
      <a href="" class="c-header__logo"><Logo /></a>
      <nav class="c-header__l-grid">
        <ul>
          <li>
            <div class="c-header__notification icons">
              <span class="c-header__notif-circle">2</span>
            </div>
          </li>
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
          <li>
            <OnlineBar />
          </li>
          <li><div class="c-header__btn-more icons" /></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Dropdown from '@/components/InputDropdown'
import OnlineBar from '@/components/OnlineBar'
import Logo from '@/components/Logo'

export default {
  name: 'Navbar',
  components: {
    Dropdown, OnlineBar, Logo
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
  z-index: 9996;
  &__notification {
    position: relative;
    &::after  {
      background-position: -49px 2px;
      width: 20px;
      height: 25px;
    }
  }
  &__notif-circle {
    position: absolute;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 8px;
    width: 14px;
    height: 14px;
    right: -14px;
    top: -3px;
    display: flex;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #F06845;
    user-select: none;
  }
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
  &__btn-more {
    &:hover {
      background: #f7f7f7;
      transition: background .2s;
      border-radius: 4px;
    }
    &::after  {
      background-position: -68px 2px;
      width: 30px;
      height: 30px;
      display: flex;
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
    height: 100%;
    ul {
      height: 100%;
      display: flex;
      align-items: center;
      column-gap: 30px;
      margin: 0;
      list-style: none;
    }
  }
}

</style>
