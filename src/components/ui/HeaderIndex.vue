<template>
  <header class="header">
    <div class="header__logo"></div>
    <ul class="header__menu">
      <li class="active">Home</li>
      <li>Library</li>
    </ul>
    <div class="header__user">
      <div v-if="!isAuth" class="header__btn" @click="$store.dispatch('modal/openModal', 'ModalAuth')">Sign in</div>
      <div v-else class="header__user-info">
        <img class="header__user-info__avatar" :src="userObject.avatar" alt="User avatar">
        <span class="header__user-info__nickname">{{ userObject.nickname }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderIndex",
  props: {
    isAuth: {
      type: Boolean,
      required: true
    },
    userObject: {
      type: [Object, null],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 0 50px;
  position: relative;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  &__logo {
    width: 140px;
  }
  &__menu {
    display: flex;
    list-style: none;
    gap: 60px;
    align-items: center;
    li {
      font-weight: 500;
      cursor: pointer;
      font-size: 1.2rem;
      color: #bebebe;
      &.active {
        color: white;
      }
      &:hover {
        color: white;
      }
    }
  }

  &__btn {
    padding: 15px 25px;
    border-radius: 7px;
    background-color: #ff3c3c;
    color: white;
    cursor: pointer;
    font-weight: 500;
  }
  &__user {

    &-info {
      max-width: 170px;
      width: auto;
      background-color: #424244;
      padding: 5px 15px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      &__avatar {
        width: 32px;
        height: 32px;
        object-fit: cover;
        border-radius: 50%;
      }

      &__nickname {
        color: white;
      }
    }
  }


}
</style>