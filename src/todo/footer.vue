<template>
  <div id="footer">
    <span>by {{author}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: 'cg'
    }
  },
}
</script>

<style lang="scss">
#footer {
  width: 600px;
  margin: 0 auto;
  margin-top:20px;
  text-align: right;
  color: #eee;
  font-size: 17px;
  text-shadow: 0 3px 0 2px #eee;
}
</style>