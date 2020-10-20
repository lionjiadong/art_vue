<template>
  <div>
    <a-card
            :loading="store.state.content.loading"
    >
      <template v-slot:title>
        <sentence-title></sentence-title>
      </template>
      <template v-slot:extra>

      </template>
      <sentence-content></sentence-content>
    </a-card>
  </div>
</template>

<script>
  import SentenceTitle from "@/views/content/center_block/sentence_card/title/SentenceTitle";
  import SentenceContent from "@/views/content/center_block/sentence_card/content/SentenceContent";
  import {useStore} from 'vuex'
  export default {
    name: "SentenceCard",
    components: {
      SentenceTitle,
      SentenceContent
    },
    data() {
      return {
        store: useStore()
      }
    }
  }
</script>

<style scoped>

</style>
