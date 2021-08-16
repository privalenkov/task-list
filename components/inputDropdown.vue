<template>
  <div class="c-drowdown-input">
    <div class="c-drowdown-input__l-container">
      <div class="c-drowdown-input__select icons">
        <div
          ref="input"
          class="input"
          type="text"
          tabindex="0"
          name="input"
          autocomplete="off"
          @focus="isOpen = true"
          @blur="isOpen = false"
        >
          {{ value ? value : value = options[0].title }}
        </div>
      </div>
      <transition name="fade">
        <ul v-show="isOpen" class="c-drowdown-input__l-grid">
          <li v-for="(option, name, index) in options" :key="index" :tabindex="index" :data-value="option.value" @mousedown="clickHandler($event)">
            {{ option.title }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    options: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },
  data: () => ({
    value: '',
    isOpen: false
  }),
  methods: {
    clickHandler (e) {
      this.value = e.target.getAttribute('data-value')
    }
  }
}
</script>

<style lang="scss" scoped>
.c-drowdown-input {
  &__l-container {
    position: relative;
    font-weight: 400;
    font-size: 14px;
    color: #6b6b6b;
    font-family: 'Roboto Slab', serif;
  }
  &__select {
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    &::after {
      background-position: -10px -10px;
      width: 20px;
      height: 20px;
    }
    &.icons::after {
      cursor: pointer;
      display: inline-block;
      overflow: hidden;
      background: #bf8eff;
      background-image: url('~static/icons/icons.svg');
      background-repeat: no-repeat;
      content: '';
      margin-right: 5px;
    }
    .input {
      cursor: pointer;
      background: #fff;
      border-radius: 4px;
      border: none;
      height: 30px;
      width: 220px;
      padding: 0 0 0 10px;
      display: flex;
      align-items: center;
    }
  }
  &__l-grid {
    position: absolute;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    background: #fff;
    list-style: none;
    padding-left: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    margin: 5px 0 0 0;

    li {
      padding: 8px 0 8px 20px;
      cursor: pointer;
    }
    li:hover {
      background: #f0f0f0;
    }
  }
}
</style>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
