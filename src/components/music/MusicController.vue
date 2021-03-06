<template>
  <div class="music-controller">
    <div class="music-controller__range" @click="progressClick">

    </div>
    <div class="music-controller__lower-block">
      <div class="music-controller__buttons">
        <queue-button :previous="true"/>
        <play-button
            :paused="currentSong.paused || currentSong.ended"
            :song="currentSong"
        />
        <queue-button/>
      </div>
      <span class="music-controller__duration">{{ songCurrentTime }} / {{ songDuration }}</span>
      <div class="music-controller__music" v-if="!currentSong.ended">
        <img class="music-controller__music__cover" :src="currentSong.cover" :alt="currentSong.title + ' cover'"/>
        <div class="music-controller__music__text">
          <h4>{{ currentSong.title }}</h4>
          <a href="#" @click.prevent="$router.push(`/author/${currentSong.author.id}`)">{{
              currentSong.author.name
            }}</a>
        </div>
        <div class="music-controller__music__like">
          <like-button :is-liked="isLiked" :song-id="currentSong.id"/>
        </div>
      </div>
      <div class="music-controller__buttons">
        <songs-queue-button/>
        <repeat-button/>
        <shuffle-button/>
        <div class="music-controller__volume">
          <div class="music-controller__volume__over" @mouseleave="volumeBarHide" @mouseenter="volumeBarShow"
               v-show="isVolumeBarShow"></div>
          <div class="music-controller__volume-bar" @mouseleave="volumeBarHide" @mouseenter="volumeBarShow"
               v-show="isVolumeBarShow">
            <div class="music-controller__volume-bar__progress"
                 @mousedown="volumeProgressDown"
                 @mousemove="volumeProgressMove"
                 @mouseup="volumeProgressMouseDown = false"
            ></div>
          </div>
          <speaker-button size="30" @click="toggleVolume" @mouseenter="volumeBarShow" @mouseleave="volumeBarHide"
                          :buttonStatus="speakerButtonStatus"/>
        </div>
        <fullscreen-button v-if="!currentSong.ended" @click="setFullscreen"/>
      </div>
    </div>
    <div ref="fullscreen">
      <div class="fullscreen-section" v-if="fullscreen">
        <div class="song-info">
          <div class="song-info__cover">
            <img :src="currentSong.cover" :alt="currentSong.title + ' cover'">
          </div>
          <div class="song-info__text">
            <h2>{{currentSong.title}}</h2>
            <a href="#" @click.prevent="$router.push(`/author/${currentSong.author.id}`)">{{
                currentSong.author.name
              }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayButton from "@/components/buttons/PlayButton";
import SpeakerButton from "@/components/buttons/SpeakerButton";
import {mapState, mapGetters} from 'vuex'
import QueueButton from "@/components/buttons/QueueButton";
import LikeButton from "@/components/buttons/LikeButton";
import RepeatButton from "@/components/buttons/RepeatButton";
import ShuffleButton from "@/components/buttons/ShuffleButton";
import SongsQueueButton from "@/components/buttons/SongsQueueButton";
import FullscreenButton from "@/components/buttons/FullscreenButton";

export default {
  name: "MusicController",
  data() {
    return {
      isVolumeBarShow: false,
      volumeProgressMouseDown: false,
      fullscreen: false,
    }
  },
  components: {
    FullscreenButton,
    SongsQueueButton, ShuffleButton, PlayButton, SpeakerButton, QueueButton, LikeButton, RepeatButton
  },
  computed: {
    ...mapState("music", ["currentSong", "volume"]),
    ...mapGetters("music", ["songDuration", "songCurrentTime", "getVolume", "songPercent", "speakerButtonStatus"]),
    ...mapGetters('user', ['likedSongsIds', 'isAuth']),
    isLiked() {
      return this.isAuth ? this.likedSongsIds.includes(this.currentSong.id) : false;
    }
  },
  methods: {
    progressClick(e) {
      const time = this.currentSong.durationSeconds * (e.clientX / e.target.offsetWidth);
      this.$store.dispatch('music/setSongTime', time);
    },
    volumeBarShow() {
      this.isVolumeBarShow = true;
    },
    volumeBarHide() {
      this.isVolumeBarShow = false;
      this.volumeProgressMouseDown = false;
    },
    volumeProgressDown(e) {
      this.volumeProgressMouseDown = true
      this.volumeProgressMove(e);
    },
    volumeProgressMove(e) {
      if (!this.volumeProgressMouseDown) return null;
      const coords = e.target.getBoundingClientRect();
      const yCoord = coords.bottom - e.clientY;
      const volume = yCoord / coords.height; // from one to zero
      this.$store.dispatch('music/changeVolume', {volume});
    },
    toggleVolume() {
      if (!this.volume) this.$store.dispatch('music/changeVolume', {previous: true});
      else this.$store.dispatch('music/changeVolume', {volume: 0});
    },
    setFullscreen() {
      this.fullscreen = !this.fullscreen
      if (this.fullscreen) {

        this.$refs.fullscreen.requestFullscreen();
      }
    }
  },
}
</script>

<style>
button.btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>

<style lang="scss" scoped>
.music-controller {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #2d2d2f;

  &__range {
    background-color: #424244;
    width: 100%;
    height: 10px;
    cursor: pointer;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: v-bind(songPercent);
      background-color: #ff3c3c;
      height: 100%;
    }
  }

  &__lower-block {
    display: flex;
    align-items: center;
    padding: 0 70px;
    height: 80px;
    position: relative;
  }

  &__buttons {
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    //width: 140px;
    column-gap: 40px;
  }

  &__duration {
    color: white;
    margin-right: auto;
  }

  &__volume {
    position: relative;

    &__over {
      position: absolute;
      width: 100%;
      height: 93px;
      bottom: 0;
    }

    &-bar {
      height: 160px;
      width: 40px;
      border-radius: 7px;
      background-color: #2d2d2f;
      position: absolute;
      //bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      padding: 20px 0;
      margin-bottom: 80px;
      bottom: 0;

      &__progress {
        height: 100%;
        margin: 0 auto;
        width: 9px;
        background-color: #424244;
        border-radius: 7px;
        cursor: pointer;
        position: relative;
        overflow: hidden;

        &:before {
          content: '';
          position: absolute;
          width: 100%;
          bottom: 0;
          height: v-bind(getVolume);
          background-color: #ff3c3c;
        }
      }
    }
  }

  &__music {
    display: flex;
    gap: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    &__cover {
      width: 50px;
      height: 50px;
      border-radius: 7px;
    }

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h4 {
        color: white;
        letter-spacing: 0.01em;
        font-weight: 500;
        max-width: 150px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      a {
        color: #bebebe;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    }

    &__like {
      display: flex;
      align-items: center;
    }
  }

  .fullscreen-section {
    height: 100vh;
    width: 100vw;
    background-color: #2d2d2f;
    display: flex;
    align-items: center;
    justify-content: center;

    .song-info {
      display: flex;
      gap: 20px;
      &__cover {
        max-width: 600px;
        max-height: 600px;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }

      &__text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 30px;

        h2 {
          color: white;
          letter-spacing: 0.01em;
          font-weight: 500;
          max-width: 500px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 2.5rem;
        }

        a {
          font-size: 1.4rem;
          color: #bebebe;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
