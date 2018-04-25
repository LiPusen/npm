<template>
  <el-dropdown trigger="click" class='international' @command="handleSetLanguage">
    <div>
      <v-icon class-name='international-icon' icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapMutations } from 'vuex' 
export default {
  computed: {
    ...mapState(['language'])
  },
  methods: {
    ...mapMutations(['mSelLang']),
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.mSelLang(lang)
      this.$message({
        message: 'switch language success',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.international-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px!important;
}
</style>


