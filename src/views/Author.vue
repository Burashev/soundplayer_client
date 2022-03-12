<template>
  <div class="author-section" v-if="author">
    <h1 class="author-section__title">{{author.name}}</h1>
    <playlist-item :playlist="author.authorSongs"></playlist-item>
  </div>
</template>

<script>
import authorService from "@/services/authorService";
import PlaylistItem from "@/components/PlaylistItem";

export default {
  name: "Author",
  props: ['id'],
  components: {PlaylistItem},
  data() {
    return {
      author: null,
    }
  },
  created() {
    authorService.getAuthor(this.id).then(data => this.author = data.data)
  }
}
</script>

<style lang="scss" scoped>
.author-section {
  &__title {
    color: white;
  }
}
</style>