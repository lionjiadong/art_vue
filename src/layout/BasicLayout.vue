<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
      </a-layout-header>
      <a-layout-content>
        <content-block></content-block>
      </a-layout-content>
      <a-layout-footer>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
  import ContentBlock from "@/views/content/ContentBlock";
  export default {
    components: {
      ContentBlock
    }
  };
</script>

<style>
  #components-layout-demo-basic {
    text-align: center;
    height: 100vh;
    background: aquamarine;
    width: 100%;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
  }
  #components-layout-demo-basic .ant-layout-content {
    background: rgba(16, 142, 233, 1);
    color: #fff;
    min-height: 400px;
    line-height: 120px;
    padding: 24px 10px 24px;
    width: 100%;
  }
  #components-layout-demo-basic > .ant-layout {
    height: 100%;
  }
</style>
