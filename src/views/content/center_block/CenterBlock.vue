<template>
  <div>
    <sentence-card></sentence-card>
    <reply-card></reply-card>
  </div>
</template>

<script>
  import SentenceCard from "@/views/content/center_block/sentence_card/SentenceCard";
  import ReplyCard from "@/views/content/center_block/reply_card/ReplyCard";
  export default {
    name: "CenterBlock",
    components: {
      SentenceCard,
      ReplyCard
    }
  }
</script>

<style scoped>

</style>
