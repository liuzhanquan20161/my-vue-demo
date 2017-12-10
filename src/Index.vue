<template>
    <div>
        {{message}}
        <ul>
            <li>22222</li>
        </ul>
        <Hello></Hello>
    </div>
</template>
<script>
    import Hello from './Hello.vue'
    export default{
        data (){
            return{
                message:'baba'
            }
        },
        components:{
            Hello
        }
    }
</script>
<style>

</style>