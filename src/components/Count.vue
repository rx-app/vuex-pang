<template>
    <div>
        <!-- <h2>{{msg}}</h2>
        <hr/> -->
        <!-- 常规取值写法 -->
        <!-- <h3>{{$store.state.count}}</h3> -->

        <!-- mapState取值写法 -->
        <h3>{{count}}</h3>

        <!-- 常规commit写法 -->
        <!-- <div>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div> -->

        <!-- mapMutations写法 -->
        <div>
            <button @click="add(10)">+</button>
            <button @click="reduce()">-</button>
        </div>
    </div>
</template>
<script>
    import store from '@/store'
    import {mapState,mapMutations,mapGetters} from 'vuex';
    export default{
        data(){
            return{
                msg:'Hello Vuex',
 
            }
        },
        computed:{
            // 常规写法
            // count(){
            //     return this.$store.state.count;
            // },  

            // mapState写法一
            // ...mapState({
            //     count:state=>state.count
            // })

            // mapState写法二
            ...mapState(['count']),

            // getter和state里的属性重名的时候，会取getter里的属性值
            // getter的常规写法
            // count(){
            //     return this.$store.getters.count;
            // }

            // mapGetters的写法
            ...mapGetters(['count'])
        },
        methods:{
            ...mapMutations(['add','reduce'])
        },
        store
        
    }
</script>