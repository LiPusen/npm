<template>
  <div class="tags-view-container">
    <v-sopan class='tags-view-wrapper' ref='scrollPane'>
      <router-link ref='tag' class="tags-view-item" :class="tag.name == tagCur.name ?'active':''" v-for="(tag, index) in Array.from(tagList)"
        :to="tag.path" :key="tag.path" @contextmenu.prevent.native="openMenu(tag,$event,index)">
        {{generateTitle(tag.name)}}
        <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(index, tag)'></span>
      </router-link>
    </v-sopan>
    <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
      <li @click="closeSelectedTag">{{$t('tagsView.close')}}</li>
      <li @click="closeOthersTags">{{$t('tagsView.closeOthers')}}</li>
      <li @click="closeAllTags">{{$t('tagsView.closeAll')}}</li>
    </ul>
  </div>
</template>

<script>
import { generateTitle } from '@/utils/i18n'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      index: 0,
      selectedTag: {}
    }
  },
  computed: {
    ...mapState(['tagList', 'tagCur'])
  },
  watch: {
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
  },
  methods: {
  	...mapMutations(['mRouteTag']),
    generateTitle, 
    moveToCurrentTag() {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag.$el)
            break
          }
        }
      })
    },
    closeSelectedTag(index, tag) {
    	tag = tag || this.selectedTag;
    	index = index || this.index;
    	const i = this.tagCur.name == 'home' ? [this.tagCur] : null;
      this.mRouteTag({del: true, index, i})
      tag.name == this.tagCur.name && this.$router.push('/')
    },
    closeOthersTags() {
      const i = [this.selectedTag];
      this.mRouteTag({delAll: true, i})
      this.$router.push(this.selectedTag.path)
    },
    closeAllTags() {
    	const i = this.tagCur.name == 'home' ? [this.tagCur] : null;
      this.mRouteTag({delAll: true, i})
      !i && this.$router.push('/')
    },
    openMenu(tag, e, index) {
      this.visible = true
      this.selectedTag = tag
      this.index = index;
      this.left = e.clientX
      this.top = e.clientY
    },
    closeMenu() {
      this.visible = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tags-view-container {
  .tags-view-wrapper {
    background: #fff;
    height: 34px;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
    .tags-view-item {
      display: inline-block;
      position: relative;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 100;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all .3s cubic-bezier(.645, .045, .355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
