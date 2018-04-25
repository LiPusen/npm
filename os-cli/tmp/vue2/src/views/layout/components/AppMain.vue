<template>
  <section class="app-main" style="min-height: 100%">
    <transition name="fade" mode="out-in">
      <!--<keep-alive :include="cachedViews">-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
	import { mapState } from 'vuex'
export default {
  name: 'AppMain',
  computed: {
    ...mapState(['cachedViews'])
  }
}
</script>
