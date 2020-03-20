<template>
    <div class='classList'>
        <div class="title">
            / 日用百货 /
            <span>recommended</span>
        </div>
        <ul>
            <router-link tag="li" to="" class="classListLi" v-for="item in list" :key="item.id">
                <div class="classList-img">
                    <img :src="item.imgUrl">
                </div>
                <div class="classList-info">
                    <p class="classList-title">{{item.title}}</p>
                    <p class="classList-desc">{{item.desc}}</p>
                    <div class="classList-price">
                        {{item.price}}
                        <button class="classList-button">立即购买</button>
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeList',
    props: {
        list: Array
    }
}
</script>
<style lang='less' scoped>
    @import '~@/assets/styles/common.less';
    @import '~@/assets/styles/mixins.less';
    .classList{
        .title{
            .titleCss();
            span{
                .spanCss();
            }
        }
        .classListLi{
            padding: .2rem;
            border-bottom: 1px solid #eee;
            overflow: hidden;
            display: flex;
            .classList-img{
                width: 2.2rem;
                height: 1.8rem;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            .classList-info{
                flex: 1 1 auto;
                padding: 0 .2rem;
                .classList-title{
                    font-size: .32rem;
                    color: #333;
                    font-weight: 900;
                }
                .classList-desc{
                    padding: .3rem 0;
                    font-size: .28rem;
                    color: #999;
                }
                .classList-price{
                    font-size: .32rem;
                    color: #333;
                }
                .classList-button{
                    width: 40%;
                    height: .44rem;
                    background: @commonColor;
                    color: #fff;
                    font-size: .24rem;
                    float: right;
                }
            }
            
        }
    }
</style>