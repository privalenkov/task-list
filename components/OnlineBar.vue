<template>
  <div class="c-online-bar">
    <div v-for="profile in getLim(profileData, 5)" :key="profile.id" class="c-online-bar__l-container">
      <div class="c-online-bar__profile-circle">
        <img :src="profile.imgUrl" :alt="profile.name">
      </div>
    </div>
    <div v-if="getProfileLength" class="c-online-bar__profile-circle">
      +{{ getProfileLength }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineBar',
  data: () => ({
    profileData: [
      { id: 0, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Семен' },
      { id: 1, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Борис' },
      { id: 2, imgUrl: 'https://i.pinimg.com/736x/fa/df/91/fadf91edf75b7c91a080463fc5f59263--don-quixote-op-art.jpg', name: 'Елисей' },
      { id: 3, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Барсик' },
      { id: 4, imgUrl: 'https://i.pinimg.com/736x/fa/df/91/fadf91edf75b7c91a080463fc5f59263--don-quixote-op-art.jpg', name: 'Аркадий' },
      { id: 5, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' }
      // { id: 6, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' },
      // { id: 7, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' },
      // { id: 8, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' },
      // { id: 9, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' },
      // { id: 10, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' },
      // { id: 11, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' },
      // { id: 12, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' },
      // { id: 13, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' },
      // { id: 14, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' },
      // { id: 15, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' },
      // { id: 16, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' },
      // { id: 17, imgUrl: 'https://thumbs.dreamstime.com/b/портрет-кота-7124539.jpg', name: 'Аркадий' }
    ]
  }),
  computed: {
    getProfileLength () {
      return this.profileData.length - 5 > 0 ? this.profileData.length - 5 : null
    }
  },
  methods: {
    getLim (obj, limit) {
      return limit ? obj.slice(0, limit) : obj
    }
  }
}
</script>

<style lang="scss" scoped>
.c-online-bar {
  position: relative;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__l-container {
    &:not(:first-child) {
      margin-left: -12px;
    }
  }
  &__profile-circle {
    cursor: pointer;
    border-radius: 50%;
    width: 28px;
    border: 2px solid #fff;
    height: 28px;
    color: #fff;
    background: #FE3090;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 10px;
    & img {
      pointer-events: none;
      user-select: none;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:not(:first-child) {
      margin-left: -12px;
    }
  }
}
//
</style>
