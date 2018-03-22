<template>
    <div class="g-main">
        <mt-header fixed class="g-main-head" :title="gTitle">
            <router-link to="/code" slot="right">
                <v-icon type="qr-scanner" class="g-main-head-icon" v-if="info.myyMeia8Url && info.memberType != 1"></v-icon>
            </router-link>
        </mt-header>
        <div class="g-main-content">
            <h1>{{info.name}}</h1>
            <div class="fun-sc">
                <v-icon type="arrow-left-b" @click.native="getInfo('-')"></v-icon>
                <span @click="sl">{{y}}年{{m}}月</span>
                <v-icon type="arrow-right-b" @click.native="getInfo('+')"></v-icon>
            </div>
            <p class="all"><b>收入合计：</b>￥{{info.total}}</p>
            <div class="table">
                <div class="table-title">
                    <span style="flex: 2;">订单号</span>
                    <span>订单金额</span>
                    <span>分成比例</span>
                    <span>分成金额</span>
                </div>
                <mt-loadmore class="g-loadmore" ref="loadmore" style="height: 100%;" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :distance-index="1" :bottom-all-loaded="allLoaded">
                    <div class="table-content" v-if="Boolean(list.length)">
                        <div class="table-content-cell" v-for="(m, i) in list" :key="i">
                            <span style="flex: 2;">{{m.orderId}}</span>
                            <span>{{m.orderMoney}}</span>
                            <span>{{(info.memberType == 1 ? m.agentRatio : m.beautyParlorRatio) || '-'}}</span>
                            <span>{{(info.memberType == 1 ? m.agentCommission : m.beautyParlorCommission) || '-'}}</span>
                        </div>
                    </div>
                    <div class="table-content" v-else>
                        <span>暂无数据</span>
                    </div>
                    <div slot="bottom" class="mint-loadmore-bottom">
                        <span v-show="bottomStatus === 'pull'">下拉刷新</span>
                        <span v-show="bottomStatus === 'drop'">释放刷新</span>
                        <span v-show="bottomStatus === 'loading'">加载中...</span>
                    </div>
                </mt-loadmore>
            </div>
            <mt-datetime-picker
                    class="g-day"
                    ref="picker"
                    type="date"
                    :startDate= "start"
                    :endDate="end"
                    @confirm="handleConfirm"
                    year-format="{value} 年"
                    month-format="{value} 月">
            </mt-datetime-picker>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
    import moment from 'moment'
    export default {
        data() {
            return {
                y: moment().format('YYYY'),
                m: moment().format('MM'),
                start: new Date('2016-10-01'),
                end: new Date(),
                req: {
                    yearMonth: '',
                    current: 1,
                    offset: 20
                },
                totalCount: 0,
                bottomStatus: '',
                allLoaded: false
            }
        },

        computed: {
            ...mapState(['info', 'list']),
            ...mapGetters(['gTitle'])
		},

        created() {
            !this.list.length && this.getInfo();
        },

        methods: {
            ...mapActions(['aInfo', 'aList']),
            ...mapMutations(['mList']),
            getInfo(ty) {
                ty && this.changeM(ty);
                this.req.current = 1;
                // if(Number(this.y) >=  Number(moment().format('YYYY')) && Number(this.m) >  Number(moment().format('MM'))) {
                    // this.$tip('没有更多数据了');
                // } else {
                    this.aInfo({
                        ops: {yearMonth: String(this.y) + String(this.m)},
                        callback: res => {
                            //this.$tip('请求成功！');
                        }
                    })
                // }
                this.getList();
            },
            getList(load){
                this.req.yearMonth = String(this.y) + String(this.m);
                this.aList({
                    ops: this.req,
                    callback: res => {
                        if(load){
                            if(res.page.rows <= (Number(res.page.current) * Number(res.page.offset))){  //如果返回的数据总条数  等于   上次的数据总条数
                                this.$tip('没有更多数据！');
                                this.req.current--;
                            }else{
                                this.mList(res.rows);
                            }
                            this.$refs.loadmore.onBottomLoaded();
                        }else{
                            this.mList(res.rows);
                        }
                    }
                });
            },
            loadBottom(){
                this.req.current++;
                this.getList(true);
            },
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
            changeM(type) {
                let n = 0;
                if(type == '-') {
                    n = Number(this.m) - 1;
                } else {
                    n = Number(this.m) + 1;
                }
                if(n > 12) {
                    this.y = Number(this.y) + 1;
                    this.m = '0' + (n - 12);
                } else if(n <= 0){
                    this.y = Number(this.y) - 1;
                    this.m = (12 - n);
                } else {
                     this.m = n >= 10 ? n : ('0' + n);
                }
            },
            sl() {
                this.$refs.picker.open();
            },
            handleConfirm(sl){
                this.y = moment(sl).format('YYYY');
                this.m = moment(sl).format('MM');
                this.getInfo();
            }
        }
    }
</script>

<style lang="less" scoped>
    .g-main-content{
        h1{
            text-align: center;
            font-size: 0.32rem;
            line-height: 0.45rem;
            margin-bottom: 0.3rem;
            white-space:nowrap; 
            text-overflow:ellipsis;
            overflow: hidden;
        }
        .fun-sc{
            text-align: center;
            font-size: 0.28rem;
            height: 0.56rem;
            span{padding: 0 0.2rem;}
            i{font-size: 0.6rem; vertical-align: middle;color: #26a2ff}
        }
        .all{
            padding: 0.2rem 0.4rem;
            text-align: right;
        }
        .table{
            width: 100%;
            height: 100%;
            /*display: flex;
            flex-direction: column;*/
            background-color: #fff;
            &-title{
                height: 0.8rem;
                line-height: 0.8rem;
                font-size: 0.24rem;
                margin-bottom: 0.2rem;
                display: flex;
                flex-direction: row;
                border-bottom: 1px solid #ccc;
                span{flex: 1; text-align: center;white-space:nowrap;text-overflow:ellipsis;overflow: hidden;}
            }
            &-content{
                overflow-y: auto;
                height: 100%;
                text-align: center;
                font-size: 0.28rem;
                line-height: 0.9rem;
                &-cell{
                    height: 0.6rem;
                    line-height: 0.6rem;
                    font-size: 0.24rem;
                    display: flex;
                    flex-direction: row;
                    span{flex: 1; text-align: center;white-space:nowrap;text-overflow:ellipsis;overflow: hidden;}
                }
            }
        }
    }
</style>
