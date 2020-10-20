<template>
  <div style="display: flex;width: 100%">
      <span style="flex: 1;margin-right: -10px"
            v-for="type in store.getters.getSentenceTypes"
            :key="type.id">
      <a-checkable-tag
              :checked="store.getters.getSelectedTypes.indexOf(type.id) > -1"
              @change="checked => handleChange(type.id, checked)"
      >
        {{ type.name }}
      </a-checkable-tag>
    </span>
  </div>
</template>

<script>
  import {useStore} from 'vuex'

  export default {
    name: "SentenceTitle",
    data() {
      return {
        store: useStore()
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init(){
        this.store.dispatch('get_label')
      },
      handleChange(type_id, checked) {
        this.store.dispatch('type_change',{type_id, checked})
      }
    }
  }
</script>

<style scoped>

</style>
