<template>
  <div class="menu-wrapper">
    <template v-for="item in routes">

      <router-link v-if="!item.children || item.children.length <= 0" :to="item.path"
        :key="item.name">
        <el-menu-item :index="item.path" :class="{'submenu-title-noDropdown':!isNest}">
          <v-icon v-if="item.icon" :icon-class="item.icon"></v-icon>
          <span slot="title">{{generateTitle(item.name)}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.redirect" :key="item.name">
        <template slot="title">
          <v-icon v-if="item.icon" :icon-class="item.icon"></v-icon>
          <span v-if="item.name" slot="title">{{generateTitle(item.name)}}</span>
        </template>

        <template v-for="child in item.children">
          <!--<sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>-->

          <router-link :to="child.path" :key="child.name">
            <el-menu-item :index="child.path">
              <v-icon v-if="child.icon" :icon-class="child.icon"></v-icon>
              <span v-if="child.name" slot="title">{{generateTitle(child.name)}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
import { generateTitle } from '@/utils/i18n'

export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    generateTitle
  }
}
</script>

