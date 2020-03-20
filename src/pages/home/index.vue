<template>
    <div>
        <div class="productClass">
            <span class="on">首页</span>
            <span>美妆</span>
            <span>健康护理</span>
            <span>居家日用</span>
            <span>洗护用品</span>
            <!-- <span v-for="item in list" :key="item.id">{{item.text}}</span>-->
        </div>
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img class="swiper-img" src="../../assets/img/banner.jpg">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
        <div class="sevice">
            <span><i></i>正品保证</span>
            <span><i></i>品牌折扣</span>
            <span><i></i>无忧退换货</span>
            <span><i></i>线上购 线下提</span>
        </div>
        <div class="icons">
            <ul>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
            </ul>
            <ul>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
            </ul>
            <ul>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
                <li><img src="../../assets/img/icon.png" alt=""><p>签到有礼</p></li>
            </ul>
        </div>
        <div class="notice">
            <div class="left ">
                <span class="iconfont icontoutiao"></span>
                <span class="title">今日头条</span>
            </div>
            <div class="right">
                <span class="msg">新版本商城已经上线啦,快来体验吧!</span>
            </div>
        </div>
        <div class="ad">
            <img src="../../assets/img/ad.jpg" width="100%" alt="">
        </div>
        <div class="modular">
            <div class="mleft"></div>
            <div class="mright">
                <div class="right_top"></div>
                <div class="right_bottom">
                    <div class="rb_left"></div>
                    <div class="rb_right"></div>
                </div>
            </div>
        </div>
        <div class="assemble">
            <div class="assemble_title">
                超值拼团<span>邀好友一起来拼团</span>
                <router-link to="" class="more">更多拼团 ></router-link>
            </div>
            <div class="person-wrap" ref="personWrap">
                <ul class="person-list" ref="personTab">
                    <li class="person-item">
                        <div class="img"></div>
                        <h3>参鹿膏</h3>
                        <p>￥12.98<span>2人团</span></p>
                    </li>
                    <li class="person-item">
                        <div class="img"></div>
                        <h3>参鹿膏</h3>
                        <p>￥12.98<span>2人团</span></p>
                    </li>
                    <li class="person-item">
                        <div class="img"></div>
                        <h3>参鹿膏</h3>
                        <p>￥12.98<span>2人团</span></p>
                    </li>
                    <li class="person-item">
                        <div class="img"></div>
                        <h3>参鹿膏</h3>
                        <p>￥12.98<span>2人团</span></p>
                    </li>
                    <li class="person-item">
                        <div class="img"></div>
                        <h3>参鹿膏</h3>
                        <p>￥12.98<span>2人团</span></p>
                    </li>
                    <li class="person-item">
                        <div class="img"></div>
                        <h3>参鹿膏</h3>
                        <p>￥12.98<span>2人团</span></p>
                    </li>
                </ul>
              </div>
        </div>
        <div class="tehui">
            <div class="teleft">
                <div class="tetitle">
                    今日特惠
                    <router-link to="" class="more" style="padding-left: 50px"><i>本场</i>13:00:40 ></router-link>
                </div>
                <ul class="teList">
                    <li>
                        <div class="img"></div>
                        <p>￥5.99</p>
                    </li>
                    <li>
                        <div class="img"></div>
                        <p>￥5.99</p>
                    </li>
                </ul>
            </div>
            <div class="teright">
                <div class="tetitle">
                    美妆馆
                    <router-link to="" class="more">更多 ></router-link>
                    <span>美妆大牌 立即享购</span>
                </div>
                <ul class="teList">
                    <li>
                        <div class="img"></div>
                        <p>￥5.99</p>
                    </li>
                    <li>
                        <div class="img"></div>
                        <p>￥5.99</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="ad2">
            <img src="../../assets/img/ad2.png" width="100%" alt="">
        </div>

        <div class="everyday">
            <div class="title">
                每日推荐<router-link to="" class="dayMore">更多 ></router-link>           
            </div>
            <div class="dayList">
                <ul class="dayUl">
                    <li>
                        <div class="img"></div>
                        <h3>参鹿膏</h3>
                        <p>￥12.98<span>+</span></p>
                    </li>
                    <li>
                        <div class="img"></div>
                        <h3>参鹿膏</h3>
                        <p>￥12.98<span>+</span></p>
                    </li>
                    <li>
                        <div class="img"></div>
                        <h3>参鹿膏</h3>
                        <p>￥12.98<span>+</span></p>
                    </li>
                </ul>
                <ul class="dayUl">    
                    <li>
                        <div class="img"></div>
                        <h3>参鹿膏</h3>
                        <p>￥12.98<span>+</span></p>
                    </li>
                    <li>
                        <div class="img"></div>
                        <h3>参鹿膏</h3>
                        <p>￥12.98<span>+</span></p>
                    </li>
                    <li>
                        <div class="img"></div>
                        <h3>参鹿膏</h3>
                        <p>￥12.98<span>+</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    data () {
        return {
            swiperOption: {
                //pagination:'.swiper-pagination',
                loop:true,
                autoplay: 3000
            }
        }
    },
    created() {
    this.$nextTick(() => {
      this.personScroll();
    });
  },
  methods: {
    personScroll() {
        let wrapper = document.querySelector('.person-wrap')
        let scroll = new BScroll(wrapper, {})
      // 默认有六个li子元素，每个子元素的宽度为120px
      let width = 6 * 120;
      this.$refs.personTab.style.width = width + "px";
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  }
}
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl';
    .productClass
        display: flex
        justify-content:space-around
        height: .8rem
        line-height: .9rem
        font-size: .32rem
        margin-bottom: .03rem
        background-color: #fff
        span.on
            color: #01a491
            font-weight: 600
            &:after
                display: block
                content: ""
                width: 20px
                height: 2px
                background-color: #01a491
                margin: -.1rem auto 0;

    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom:40%
        background: #00a060    
        .swiper-img
            width: 100%
        
    .sevice
        display: flex
        justify-content:space-around
        height: .8rem
        line-height: .8rem
        background-color: #fff
        color: #999
    
    .icons
        padding: .2rem
        border-bottom: 1px solid #eee   
        ul
            display: flex
            justify-content: space-around
            margin-bottom: .3rem        
            li
                text-align: center            
                p
                    margin-top: .2rem            
                img
                    width: 60%
    
    .notice
        padding: .2rem
        display: flex
        align-items: center;   
        .left
            flex: 0 0 80px
            display: flex
            align-items: center
            margin-right: .27rem    
            .title
                font-size: .36rem
                font-weight: 600
                margin-left: .1rem
        .right
            flex: 1
            display: flex
            align-items: center
            overflow: hidden
            height: 100%    
            .msg
                overflow: hidden
                white-space: nowrap
                text-overflow: ellipsis
    
    .modular
        display: flex
        width: 96%
        margin: .2rem auto    
        .mleft
            width: 2.7rem
            height: 3.6rem
            background-color: aquamarine
            margin-right: .2rem
            border-radius: $border-radius
        .mright
            flex: 1 1 auto
            height: 3.6rem
            background-color: #eee    
            .right_top
                width: 100%
                height: 1.6rem
                margin-bottom: .2rem
                background-color: aquamarine
                border-radius: $border-radius
            .right_bottom
                display: flex
                margin-bottom: 0    
                .rb_left,.rb_right
                    width: 48%
                    height: 1.8rem
                    background-color: aquamarine
                    border-radius: $border-radius
                .rb_left
                    margin-right: 4%
    
    .assemble
        width: 96%
        min-height: 4.4rem
        background-color: #ffb640
        border-radius: $border-radius
        margin: 0 auto
        padding: .06rem
        .assemble_title
            font-size: .44rem
            font-weight: 600
            color: #fff
            font-style: italic
            padding: .3rem    
            span
                font-size: .28rem
                font-weight: normal
                margin-left: .3rem    
            .more
                font-size: .32rem
                color: #fff
                font-weight: normal
                font-style: normal
                border: 1px solid #fff
                display: inline-block
                padding: 0 .16rem
                height: .48rem
                line-height: .48rem
                border-radius: 12px
                float: right   
        .person-wrap
            width: 100%
            overflow: hidden     
            .person-list
                display: flex    
                .person-item
                    width: 2.4rem
                    height: 3rem
                    margin:0 .06rem
                    background-color: #fff
                    border-radius: $border-radius
                    overflow: hidden    
                    .img
                        height: 1.8rem
                        background-color: aquamarine    
                    h3
                        font-size: .32rem
                        padding: .1rem    
                    p
                        listP()
                        span
                            font-size: .24rem
                            margin-left: .2rem
                            font-weight: 400
    
    .tehui
        width: 96%
        margin: .2rem auto
        boxShdow()
        min-height: 2.8rem
        display: flex
        padding: .3rem 0    
        .teleft,.teright
            width: 50%
            padding: 0 .3rem    
            .tetitle
                color: #00a390
                font-size: .4rem
                font-weight: 600
                min-height: .9rem        
                .more
                    display: inline-block
                    padding: 0 .16rem
                    height: .4rem
                    line-height: .4rem
                    border:1px solid #00a390
                    border-radius: $border-radius
                    color: #00a390
                    font-size: .28rem
                    font-weight: 400
                    position: relative    
                i
                    background-color: #00a390
                    color: #fff
                    position: absolute
                    left: -1px
                    padding: 0 .16rem
                    border-radius: $border-radius
                span
                    font-weight: 400
                    font-size: .32rem
                    display: block
                    margin-top: .1rem    
            .teList
                display: flex
                justify-content: space-around    
                li
                    width: 48%
                    margin-right: 2%
                    margin-top: .2rem    
                    .img
                        width: 100%
                        height: 1.2rem
                        background-color: aquamarine
                        border-radius: $border-radius
                    p
                        font-size: .28rem
                        text-align: center
                        margin-top: .2rem
                        font-weight: 600

    .everyday
        width: 96%
        margin: .4rem auto    
        .title
            font-size: .44rem
            padding: 0 .3rem .3rem    
            .dayMore
                font-size: .28rem
                font-weight: 400
                color: #666
                float: right    
        .dayList
            padding: .1rem
            boxShdow()
            .dayUl
                display: flex    
                .img
                    height: 1.8rem
                    background-color: aquamarine
                    border-radius: 10px 10px 0 0                
                li
                    width: 2.2rem
                    min-height: 3rem
                    margin:.1rem .06rem
                    background-color: #fafafa
                    border-radius: $border-radius
                    h3
                        text-align: center
                        font-size: .32rem
                        padding: .1rem 0                
                    p
                        listP()
                        color: #01a491
                        span
                            display: inline-block
                            width: .4rem
                            height: .4rem
                            line-height: .4rem
                            background-color: #00a390
                            text-align: center
                            color: #fff
                            border-radius: 50%
                            float: right
                            font-weight: 400
    
</style>