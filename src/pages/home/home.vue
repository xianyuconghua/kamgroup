<template>
    <div>
        <home-header></home-header>
        <home-class :list="classNav"></home-class>
        <home-swiper :list="swiperList"></home-swiper>
        <home-today :list="todayList"></home-today>
        <home-classlist :list="classList"></home-classlist>
        <!-- <home-footer></home-footer> -->
    </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeClass from './components/class'
import HomeSwiper from './components/swiper'
import HomeToday from './components/today'
import HomeClasslist from './components/classList'
// import HomeFooter from './components/footer'
import axios from 'axios'
export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeClass,
        HomeSwiper,
        HomeToday,
        HomeClasslist,
        // HomeFooter
    },
    data(){
        return{
            classNav: [],
            swiperList: [],
            todayList: [],
            classList: []
            // classNav: [
            //     {
            //         id:'0001',
            //         text:'日用百货'
            //     },
            //     {
            //         id:'0002',
            //         text:'营养食品'
            //     },
            //     {
            //         id:'0003',
            //         text:'纺织居家'
            //     },
            //     {
            //         id:'0004',
            //         text:'母婴用品'
            //     },
            //     {
            //         id:'0005',
            //         text:'运动箱包'
            //     },
            //     {
            //         id:'0006',
            //         text:'美容美妆'
            //     }
            // ],
            // swiperList: [
            //     {
            //         id:'0001',
            //         imgUrl:'https://kamgw.oss-cn-beijing.aliyuncs.com/test/69b77e43da07a94bbd707cbec2b0965.jpg'
            //     },
            //     {
            //         id:'0002',
            //         imgUrl:'https://kamgw.oss-cn-beijing.aliyuncs.com/test/bg1.jpg'
            //     }
            // ],
            // todayList: [
            //     {
            //         id:'0001',
            //         imgUrl:'http://img1.qunarzz.com/sight/p0/1606/23/237ad24ea960b2f290.water.jpg_200x200_5c711497.jpg',
            //         desc:'洗眼液',
            //         price:'￥168'
            //     },
            //     {
            //         id:'0002',
            //         imgUrl:'http://img1.qunarzz.com/sight/p0/1505/da/da7c46e2eef8714e.water.jpg_200x200_2a340470.jpg',
            //         desc:'玻尿酸',
            //         price:'￥168'
            //     },
            //     {
            //         id:'0003',
            //         imgUrl:'http://img1.qunarzz.com/sight/p0/1903/fb/fb9b8d09ff744d19a3.water.jpg_200x200_f96c9ebf.jpg',
            //         desc:'微雕三部曲',
            //         price:'￥168'
            //     }
            // ],
            // classList: [
            //     {
            //         id:'0001',
            //         imgUrl:'http://img1.qunarzz.com/sight/p0/1606/23/237ad24ea960b2f290.water.jpg_200x200_5c711497.jpg',
            //         title:'洁柔抽取式纸面巾',
            //         desc:'亲肤呵护，天然竹浆，湿水不宜破',
            //         price:'￥68'
            //     },
            //     {
            //         id:'0002',
            //         imgUrl:'http://img1.qunarzz.com/sight/p0/1606/23/237ad24ea960b2f290.water.jpg_200x200_5c711497.jpg',
            //         title:'洁柔抽取式纸面巾',
            //         desc:'亲肤呵护，天然竹浆，湿水不宜破',
            //         price:'￥68'
            //     },
            //     {
            //         id:'0003',
            //         imgUrl:'http://img1.qunarzz.com/sight/p0/1606/23/237ad24ea960b2f290.water.jpg_200x200_5c711497.jpg',
            //         title:'洁柔抽取式纸面巾',
            //         desc:'亲肤呵护，天然竹浆，湿水不宜破',
            //         price:'￥68'
            //     },
            //     {
            //         id:'0004',
            //         imgUrl:'http://img1.qunarzz.com/sight/p0/1606/23/237ad24ea960b2f290.water.jpg_200x200_5c711497.jpg',
            //         title:'洁柔抽取式纸面巾',
            //         desc:'亲肤呵护，天然竹浆，湿水不宜破',
            //         price:'￥68'
            //     },
            //     {
            //         id:'0005',
            //         imgUrl:'http://img1.qunarzz.com/sight/p0/1606/23/237ad24ea960b2f290.water.jpg_200x200_5c711497.jpg',
            //         title:'洁柔抽取式纸面巾',
            //         desc:'亲肤呵护，天然竹浆，湿水不宜破',
            //         price:'￥68'
            //     },
            //     {
            //         id:'0006',
            //         imgUrl:'http://img1.qunarzz.com/sight/p0/1606/23/237ad24ea960b2f290.water.jpg_200x200_5c711497.jpg',
            //         title:'洁柔抽取式纸面巾',
            //         desc:'亲肤呵护，天然竹浆，湿水不宜破',
            //         price:'￥68'
            //     }
            // ]
        }
    },
    // methods: {
    //     getData(){
    //         axios.get('/api/index.json')
    //         .then(this.getDataSucc)

    //         .catch(function(error){
    //             console.log(error);
    //         })
    //     },
    //     getDataSucc(res){
    //         res = res.data
    //         const data = res.data
    //         this.classNav = data.classNav
    //         this.swiperList = data.swiperList
    //         this.todayList = data.todayList
    //         this.classList = data.classList
    //     }
    // },
    // mounted() {
    //     this.getData()
    // }
    mounted() {
        axios.get('/api/index.json',{
            // params: {
            //     ID: 'kam852978'
            // }
        })
        .then(response => { 
            //console.log(response);
            const res = response.data.data
            this.classNav = res.classNav
            this.swiperList = res.swiperList
            this.todayList = res.todayList
            this.classList = res.classList
        })
        .catch((error) => {
            console.log(error);
        })
    }
    // created() {
    //     axios({
    //         method:'get',
    //         url:'/api/index.json',
    //         data:{    //这里是发送给后台的数据
                    
    //         }
    //     }).then((response) => {          //这里使用了ES6的语法
    //         console.log(response)       //请求成功返回的数据
    //     }).catch((error) => {
    //         console.log(error)       //请求失败返回的数据
    //     })

            // .then(function(response){ 
            //     console.log(response);
            // })
            // .catch(function(error){
            //     console.log(error);
            // })

    // },
}
</script>