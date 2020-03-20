<template>
    <div class="header">
        <div class="header-left">
            <i class="iconfont">&#xe634;</i>
            <p>分类</p>
        </div>
        <div class="header-input">
            <i class="iconfont">&#xe611;</i>
            <input type="text" placeholder="搜索商品">
        </div>
        <router-link to="/shopcart">
        <div class="header-right">
            <i class="iconfont">&#xe606;</i>
        </div>
        </router-link>
    </div>
</template>

<style lang="less" scoped>
    @import '~@/assets/styles/common.less';
    .header{
        padding: .2rem 0;
        background: @commonColor;
        color: #fff;
        display: flex;
        text-align: center;
        .header-left{
            width: 1rem;
            .iconfont{
                font-size: .4rem;
            }
        }
        .header-input{
            flex: 1 1 auto;
            background: #fff;
            border-radius: 6px;
            overflow: hidden;
            display: flex;
            .iconfont{
                color: #aaa;
                font-size: .4rem;
                padding: .2rem;
            }
            input{
                flex: 1 1 auto;
                height: .72rem;
            }
        }
        .header-right{
            width: 1rem;
            padding-top: .1rem;
            .iconfont{
                font-size: .5rem;
                color: #fff;
            }
        }
    }
    
</style>