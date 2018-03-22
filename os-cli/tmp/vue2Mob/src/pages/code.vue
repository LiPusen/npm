<template>
  <div class="g-main">
    <mt-header fixed class="g-main-head" title="美吖吖美容院">
        <router-link to="/" slot="left">
            <v-icon type="chevron-left" class="g-main-head-icon"></v-icon>
        </router-link>
    </mt-header>
    <div class="g-main-content">
        <div class="qr">
            <h2>扫码有惊喜哦</h2>
            <span id="qr"></span>
        </div>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
			...mapState(['info'])
        },
        mounted() {
            document.getElementById('qr').innerHTML = '';
            new QRCode('qr',{text: this.info.myyMeia8Url});
        }
    }
</script>

<style lang="less" scoped>
   .qr{
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       margin: auto;
       width: 4rem;
       height: 4rem;
       h2{text-align: center;font-size: 0.38rem; line-height: 0.8rem;}
   }
</style>


