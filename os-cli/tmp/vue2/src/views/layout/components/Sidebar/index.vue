<template>
  <v-sobar>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="!sidebar.opened"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item :routes="menu"></sidebar-item>
    </el-menu>
  </v-sobar>
</template>

<script>
import { mapState } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapState([
      'menu',
      'sidebar'
    ])
  }
}
</script>
