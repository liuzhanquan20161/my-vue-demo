import Vue from 'vue/dist/vue'
import Index from './Index.vue'

new Vue({
    el:'#app',
    data:{
        msg:'abc'
    },
    render: h => h(Index)
})
