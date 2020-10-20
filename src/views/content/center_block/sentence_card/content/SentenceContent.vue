<template>
  <div>
    <div style="float: right">
      <a style="color: deepskyblue" @click="refresh">
        <SyncOutlined/>
      </a>
    </div>
    <div style="color: #696969;font-weight: 700;">
      《 {{store.getters.getSentenceContent.from_by}} 》
    </div>
    <div style="width: 100%;color: #696969;font-size: 12px">
      <div v-if="store.getters.getSentenceContent.from_who" style="float: right;width: 50%">
        -- {{store.getters.getSentenceContent.from_who}}
      </div>
    </div>
    <br>
    <div style="color: #696969;margin-top: 10px;user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;">
      {{store.getters.getSentenceContent.content}}
    </div>
    <br>
    <hr style="background-color: Gainsboro;height:1px; border:none;">
    <div style="width: 100%;">
      <span style="float: left;font-size: 10px;color: darkgray">
        {{store.getters.getSentenceContent.creator}}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {{store.getters.getSentenceContent.create_date}}
      </span>
      <span style="float: right;font-size: 15px;">
<!--        <HeartTwoTone twoToneColor="#eb2f96"/>-->
        <a style="color: pink" @click="favorite">
        <HeartTwoTone :twoToneColor="heart.color"/>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
  import {
    SyncOutlined,
    HeartTwoTone
  } from '@ant-design/icons-vue';
  import {useStore} from 'vuex'

  export default {
    name: "SentenceContent",
    components: {
      SyncOutlined,
      HeartTwoTone
    },
    data() {
      return {
        store: useStore(),
        heart: {
          color: 'Darkgray'
        }
      }
    },
    mounted() {
    },
    methods: {
      refresh() {
        this.store.dispatch('get_content');
      },
      favorite() {
        this.heart.color = this.heart.color == 'Darkgray' ? 'Pink' : 'Darkgray'
      },
    }
  }
</script>

<style scoped>

</style>
