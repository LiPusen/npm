<template>
    <div class="error403">
        <div class="error403-body-con">
            <div class="error403-body-con-title">4<span class="error403-0-span"><v-icon type="android-lock"></v-icon></span><span class="error403-key-span"><v-icon type="ios-bolt"></v-icon></span></div>
            <p class="error403-body-con-message">You don't have permission</p>
            <div class="error403-btn-con">
                <button @click="backPage" class="btn">返回上一页</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Error403',
    methods: {
        backPage () {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="less" scoped>
@keyframes error403animation {
    0% {
        transform: rotateZ(0deg);
    }
    40% {
        transform: rotateZ(-20deg);
    }
    45% {
        transform: rotateZ(-15deg);
    }
    50% {
        transform: rotateZ(-20deg);
    }
    55% {
        transform: rotateZ(-15deg);
    }
    60% {
        transform: rotateZ(-20deg);
    }
    100% {
        transform: rotateZ(0deg);
    }
}
.error403{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    &-body-con{
        width: 6rem;
        height: 5rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        &-title{
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            color: #2d8cf0;
            height: 3rem;
            line-height: 3rem;
            .error403-0-span{
                display: inline-block;
                position: relative;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                border: 0.24rem solid #ed3f14;
                color: #ed3f14;
                margin-right: 0.08rem;
                i{
                    display: inline-block;
                    font-size: 1.2rem;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }
            }
            .error403-key-span{
                display: inline-block;
                position: relative;
                width: 1rem;
                height: 1.8rem;
                border-radius: 50%;
                i{
                    display: inline-block;
                    font-size: 2.94rem;
                    position: absolute;
                    top: -0.6rem;
                    left: 0.22rem;
                    transform: translate(-50%,-60%);
                    transform-origin: center bottom;
                    animation: error403animation 2.8s ease 0s infinite;
                }
            }
        }
        &-message{
            display: block;
            text-align: center;
            font-size: 0.4rem;
            font-weight: 500;
            letter-spacing: 0.02rem;
            color: #dddde2;
        }
    }
    &-btn-con{
        text-align: center;
        margin-top: 0.4rem;
        .btn{
            background-color: #2d8cf0;
            border: 1px solid #2d8cf0;
            color: #fff;
            width: 4rem;
            height: 0.8rem;
            border-radius: 0.1rem; 
            font-size: 0.3rem;
            box-shadow: 0 0 2px #ccc;
        }
    }
}
</style>
