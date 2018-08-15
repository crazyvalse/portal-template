<template>
  <div>
    <component :is="component"></component>
  </div>
</template>
<script type="text/ecmascript-6">
import Options from "@common/options.js";
import Demo from "./modules/Demo/index.vue";
export default {
  name: "liferay",
  props: ["options", "namespace", "module"],
  created: function() {
    Options.options = this.options ? this.options : Options.options;
    Options.namespace = this.namespace;
  },
  computed: {
    component: function() {
      if (!this.module) {
        throw new Error("module 没有初始化！！");
      }
      return this.module;
    }
  },
  components: {
    Demo,
  }
};
</script>