<template>
    <div class="productClass">
        <!-- <span class="on">日用百货</span>
        <span>营养食品</span>
        <span>纺织居家</span>
        <span>母婴用品</span>
        <span>运动箱包</span>
        <span>美容美妆</span> -->
        <span v-for="item in list" :key="item.id">{{item.text}}</span>
    </div>
</template>

<script>
export default {
    name:'HomeClass',
    props: {
        list: Array
    }
}
</script>

<style lang="less" scoped>
    @import '~@/assets/styles/common.less';
    .productClass{
        display: flex;
        text-align: center;
        height: .8rem;
        line-height: .8rem;
        span{
            flex: 1 1 auto;
            &:hover{
                border-bottom: 2px solid @commonColor;
            }
        }
        
    }
</style>