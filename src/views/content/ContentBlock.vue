<template>
  <div>
    <a-row>
      <a-col :xs="0" :sm="3" :xl="7">
        <left-block></left-block>
      </a-col>
      <a-col :xs="24" :sm="18" :xl="10">
        <center-block></center-block>
      </a-col>
      <a-col :xs="0" :sm="3" :xl="7">
        <right-block></right-block>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import CenterBlock from "@/views/content/center_block/CenterBlock";
  import LeftBlock from "@/views/content/left_block/LeftBlock";
  import RightBlock from "@/views/content/right_block/RightBlock";
  export default {
    name: "ContentBlock",
    components: {
      CenterBlock,
      LeftBlock,
      RightBlock
    }
  }
</script>

<style scoped>

</style>
