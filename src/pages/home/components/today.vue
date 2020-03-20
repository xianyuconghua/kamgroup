<template>
    <div class='today'>
        <div class="title">
            / 今日主推区 /
            <span>Today Promotion</span>
        </div>
        <ul>
            <router-link tag="li" to="" class="todayLi" v-for="item in list" :key="item.id">
                <div class="today-img"><img :src="item.imgUrl"></div>
                <p class="today-desc">{{item.desc}} {{item.price}}</p>
                <button class="today-button">立即购买</button>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeToday',
    props: {
        list: Array
    }
}
</script>
<style lang='less' scoped>
    @import '~@/assets/styles/common.less';
    @import '~@/assets/styles/mixins.less';
    .today{
        padding: .2rem;
        .title{
            .titleCss();
            span{
                .spanCss();
            }
        }
        ul{
            display: flex;
            .todayLi{
                min-height: 2.7rem;
                margin: .2rem .1rem;
                border-radius: 10px;
                box-shadow: 0 2px 6px rgba(0,0,0,.1);
                overflow: hidden;
                .today-img{
                    height: 1.6rem;
                    overflow: hidden;
                    img{
                        width: 100%;
                    }
                }
                .today-desc{
                    padding: .1rem;
                    font-size: .24rem;
                    color: #666;
                }
                .today-button{
                    width: 90%;
                    height: .4rem;
                    margin: .1rem 0 .1rem 5%;
                    background: @commonColor;
                    color: #fff;
                    font-size: .24rem;
                }
            }
        }
        
    }
</style>