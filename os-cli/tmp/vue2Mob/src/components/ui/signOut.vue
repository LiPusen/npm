<template>
    <div class="g-out" v-if="token"> 
        <transition name="fade">
            <div class="g-out-click" id="quit" v-show="!sta" @click.self="mconfirm()">点击退出</div>
        </transition>
        <transition name="fade">
            <div class="g-out-enter" v-show="sta" @click.self="exitEnter">退出</div>
        </transition>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        data() {
            return {
                sta: false
            }
        },
        computed:{
            ...mapState(['token'])
        },
        created() {
            document.body.onclick = (e) => {
                e.target.id != 'quit' && (this.sta = false)
            }
        },
        methods: {
            ...mapMutations(['mExit']),
            ...mapActions(['aOut']),
            mconfirm() {
                this.sta = !this.sta;
            },
            exitEnter() {
                this.sta = !this.sta;
                this.mExit();
                this.aOut();
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped lang="less">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .g-out{
        position: absolute;
        width: 100%;
        height: 0.1rem;
        right: 0;
        bottom: 0;
        z-index: 100;
        &-click,&-enter{
            position: absolute;
        }
        &-click{
            right: 0;
            bottom: 1rem;
            cursor: pointer;
            width: 0.48rem;
            border-radius: 0.1rem 0 0 0.1rem;
            padding: 0.1rem 0.1rem;
            background-color: #ffbb55;
            color: #fff;
        }
        &-enter{
            bottom: 1rem;
            left: 0;
            right: 0;
            margin: auto;
            background-color: #e62b73;
            color: #fff;
            border-radius: 50%;
            width: 1.2rem;
            height: 1.2rem;
            line-height: 1.2rem;
            text-align: center;
        }
    }
</style>
