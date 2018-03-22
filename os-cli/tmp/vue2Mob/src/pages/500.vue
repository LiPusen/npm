<template>
    <div class="error500">
        <div class="error500-body-con">
            <div class="error500-body-con-title">
                5<span class="error500-0-span"><v-icon type="social-freebsd-devil"></v-icon></span><span class="error500-0-span"><v-icon type="social-freebsd-devil"></v-icon></span>
            </div>
            <p class="error500-body-con-message">Oops! the server is wrong</p>
            <div class="error500-btn-con">
                <button @click="backPage" class="btn">返回上一页</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Error500',
    methods: {
        backPage () {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="less" scoped>
@keyframes error500animation {
    0% {
        transform: rotateZ(0deg);
    }
    20% {
        transform: rotateZ(-10deg);
    }
    40% {
        transform: rotateZ(5deg);
    }
    60% {
        transform: rotateZ(-5deg);
    }
    80% {
        transform: rotateZ(10deg);
    }
    100% {
        transform: rotateZ(0deg);
    }
}
.error500{
    &-body-con{
        width: 6rem;
        height: 5rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        &-title{
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            color: #2d8cf0;
            height: 3rem;
            line-height: 3rem;
            .error500-0-span{
                display: inline-block;
                position: relative;
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 50%;
                border: 0.2rem solid #ed3f14;
                color: #ed3f14;
                margin-right: 0.04rem;
                i{
                    display: inline-block;
                    font-size: 1.1rem;
                    position: absolute;
                    bottom: -0.11rem;
                    left: 0.02rem;
                    transform-origin: center bottom;
                    animation: error500animation 3s ease 0s infinite alternate;
                }
            }
        }
        &-message{
            display: block;
            text-align: center;
            font-size: 0.4rem;
            font-weight: 500;
            letter-spacing: 0.04rem;
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
