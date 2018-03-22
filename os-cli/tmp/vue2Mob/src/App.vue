<template>
    <div class="g-box">
        <router-view></router-view>
        <v-sign-out></v-sign-out>
    </div>
</template>
<script>
    import { mapMutations} from 'vuex'
    export default {
    	data() {
    		return {
    			
    		}
    	},
        computed: {
         	
        },
        methods: {
        }
    }
</script>

<style lang="less">
    @import './style/global.less';
    @import './style/tool.less';
</style>