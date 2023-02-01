<template>
  <div id="app">
    <div id="mindmap">
      <jsplumb-mindmap-builder id="myMindmap" ref="builder"></jsplumb-mindmap-builder>
    </div>
    <div id="rhs">
      <jsplumb-mindmap-builder-inspector mindmapId="myMindmap"></jsplumb-mindmap-builder-inspector>
    </div>
  </div>
</template>

<style>
  @import "../node_modules/@jsplumb-components/mindmap/jsplumb.components.mindmap.css";
  @import "../node_modules/@jsplumb-components/mindmap/jsplumb.components.mindmap.theme.default.css";
  @import "../assets/css/app.css";


</style>

<script>

export default {
  name: 'app',
  mounted:function () {
    this.$refs.builder.loadUrl("example-mindmap.json", () => this.$refs.builder.zoomToFit())
  }
}
</script>

