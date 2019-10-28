<template>
    <div>
        <!-- <h2>{{msg}}</h2>
        <hr/> -->
        <h3>{{$store.state.count}}</h3>
        <h3>{{count}}</h3>
        <div>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>
    </div>
</template>
<script>
    import store from '@/store'
    import {mapState} from 'vuex';
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
            ...mapState(['count'])
        },
        store
        
    }
</script>