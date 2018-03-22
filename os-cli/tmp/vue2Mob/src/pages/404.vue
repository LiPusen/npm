<template>
    <div class="error404">
        <div class="error404-body-con">
            <div class="error404-body-con-title">4<span><v-icon type="ios-navigate-outline"></v-icon></span>4</div>
            <p class="error404-body-con-message">YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST</p>
            <div class="error404-btn-con">
                <button @click="backPage" class="btn">返回上一页</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nofind',
    methods: {
        backPage () {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="less" scoped>
    @keyframes error404animation {
        0% {
            transform: rotateZ(0deg);
        }
        20% {
            transform: rotateZ(-60deg);
        }
        40% {
            transform: rotateZ(-10deg);
        }
        60% {
            transform: rotateZ(50deg);
        }
        80% {
            transform: rotateZ(-20deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
    .error404{
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
                span{
                    display: inline-block;
                    color: #19be6b;
                    font-size: 2.5rem;
                    animation: error404animation 3s ease 0s infinite alternate;
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
