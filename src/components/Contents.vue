<template>
    <div id="contents" class="contentsarea">
        {{ message }}
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Contents',
  components: {
  },
  data () {
    return {
      message: 'Contents 영역'
    }
  }
}
</script>

<style>

</style>