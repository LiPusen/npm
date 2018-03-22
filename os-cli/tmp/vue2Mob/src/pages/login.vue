<template>
	<div class="login" @keydown.enter="handleSubmit">
        <div class="login-logo">
			<img src="../assets/logo.png" alt="美吖吖">
		</div>
		<div class="g-form">
			<mt-field label="用户名" placeholder="请输入用户名" :state="logData.account ? 'success' : ''" type="text" :attr="{ autocomplete: 'off' }" v-model.trim="logData.account"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" :state="logData.password ? 'success' : ''" type="password" :attr="{ autocomplete: 'off' }" v-model="logData.password"></mt-field>
		</div>
		<div class="login-btn">
			<mt-button type="primary" @click.native="handleSubmit">登录</mt-button>
		</div>
    </div>
</template>

<script>
	import { mapActions, mapMutations } from 'vuex'
	export default {
		data () {
			return {
			    logData:{
                    account: '',
                    password: ''
				}
			};
		},
		created() {
			this.mExit();
		},
		methods: {
			...mapActions(['aLogin']),
			...mapMutations(['mExit']),
			handleSubmit () {
				if(this.logData.account && this.logData.password) {
					this.aLogin({
                        ops: this.logData,
						callback: res => {
                            this.$tip('登录成功！');
                            this.$router.push('/');
						}
					})
				} else {
					this.$tip('用户名或密码不能为空！')
				}
			}
		}
	};
</script>

<style lang="less" scoped="scoped">
	.login{
		position: absolute;
		top: 0;
		bottom: 2rem;
		right: 0;
		left: 0;
		margin: auto;
		width: 5.5rem;
		height: 6rem;
		&-logo{
			width: 3rem;
			height: 3rem;
			margin: 0 auto 0.8rem;
			img{width: 100%;height: 100%}
		}
		button{
			width: 100%;
			margin-top: 0.4rem;
			letter-spacing: 0.4rem;
			text-indent: 0.4rem;
		}
	}
</style>
