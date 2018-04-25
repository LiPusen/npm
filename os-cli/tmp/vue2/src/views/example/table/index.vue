<template>
  <transition name="fade" mode="out-in">
    <!--<keep-alive :include='cachedViews'>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'TableMain',
  computed: {
  }
}
</script>
