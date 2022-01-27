<template>
  <div class="music-item">
    <div class="music-item__cover">
      <div class="music-item__cover__bg-cover"></div>
      <a class="music-item__cover__play-btn" href="#">
        <PlayButton :paused="isPaused"
                    size="17"
                    :song="song">
        </PlayButton>
      </a>
      <img :src="song.cover" :alt="'The cover of the song ' + song.title">
    </div>
    <div class="music-item__text">
      <h4>{{ song.title }}</h4>
      <p>
        <a href="#">{{ song.author }}</a>
      </p>
    </div>
    <span class="music-item__duration">2:40</span>
  </div>
</template>

<script>
import PlayButton from "@/components/ui/PlayButton";
import {mapState} from "vuex";

export default {
  components: {PlayButton},
  name: "MusicItem",
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('music', ['currentSong']),
    isPaused() {
      if (this.song.id === this.currentSong.id) return this.currentSong.paused;
      return true;
    }
  }
}
</script>

<style lang="scss" scoped>
.music-item {
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 7px;
  padding: 10px;

  &__cover {
    max-width: 50px;
    max-height: 50px;
    border-radius: 7px;
    overflow: hidden;
    margin-right: 20px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: inline-block;
    }

    &__play-btn {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.52);
      border-radius: 50%;
      width: 70%;
      height: 70%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }

    &__bg-cover {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.48);
      opacity: 0;
    }
  }

  &:hover &__cover__bg-cover, &:hover &__cover__play-btn {
    opacity: 1;
  }

  &:hover {
    border-color: #bebebe;
  }

  &__text {
    margin-right: auto;

    h4 {
      color: white;
      margin-bottom: 10px;
    }

    p {
      display: flex;
      gap: 15px;

      a {
        text-decoration: none;
        color: #bebebe;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &__duration {
    color: #bebebe;
  }
}
</style>