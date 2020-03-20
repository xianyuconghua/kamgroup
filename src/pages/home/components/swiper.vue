<template>
    <div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
		    <swiper-slide v-for="item in list" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl">
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination:'.swiper-pagination',
                loop:true,
                autoplay: 3000
            }
        }
    },
    computed: {
        showSwiper () {
            return this.list.length	//使轮播图片默认显示第一张
        }
    }
}
</script>
<style scoped lang="less">
    @import '~@/assets/styles/common.less';
    .wrapper /deep/ .swiper-pagination-bullet{
        border: 2px solid @commonColor;
        opacity: 1;
        background: none;      
    }
    .wrapper /deep/ .swiper-pagination-bullet-active{
        background: @commonColor;        
    }
    .wrapper{
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom:57%;
        background: #eee;
        .swiper-img{
            width: 100%;
        }        
    }
    
</style>