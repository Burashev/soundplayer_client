<template>
  <div class="music-item" :class="{'active': isActiveSong}">
    <div class="music-item__cover">
      <div class="music-item__cover__bg-cover"></div>
      <div class="music-item__cover__play-btn">
        <play-button
            :paused="isPaused"
            size="17"
            :song="song"
            :playlist="playlist"
        />
      </div>
      <img :src="song.cover" :alt="'The cover of the song ' + song.title">
    </div>
    <div class="music-item__text">
      <h4>{{ song.title }}</h4>
      <p>
        <a href="#" @click="$router.push(`/author/${song.author.id}`)">{{ song.author.name }}</a>
      </p>
    </div>
    <div class="music-item__like" :class="{'active' : isLiked}">
      <like-button :is-liked="isLiked" :song-id="song.id"/>
    </div>
    <span class="music-item__duration">{{ songDuration }}</span>
  </div>
</template>

<script>
import PlayButton from "@/components/ui/PlayButton";
import LikeButton from "@/components/ui/LikeButton";
import {mapState, mapGetters} from "vuex";
import {timeFormat} from "@/services/utils";

export default {
  components: {PlayButton, LikeButton},
  name: "MusicItem",
  props: {
    song: {
      type: Object,
      required: true
    },
    playlist: {
      type: Object,
      required: true
    },
    isActiveSong: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapState('music', ['currentSong']),
    ...mapGetters('user', ['likedSongsIds', 'isAuth']),
    isPaused() {
      return this.isActiveSong ? this.currentSong.paused : true;
    },
    songDuration() {
      return timeFormat(this.song.durationSeconds);
    },
    isLiked() {
      return this.isAuth ? this.likedSongsIds.includes(this.song.id) : false;
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

  $class: &;

  &.active {
    background-color: #2d2d2f;

    #{$class}__cover__bg-cover, #{$class}__cover__play-btn {
      opacity: 1;
    }
  }

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
      letter-spacing: 0.01em;
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

  &__like {
    margin-right: 20px;
    display: none;

    #{$class}:hover & {
      display: block;
    }

    &.active {
      display: block;
    }
  }
}
</style>