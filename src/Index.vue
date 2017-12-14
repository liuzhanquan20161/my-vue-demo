<template>
    <div class="base-content">
        <p>请填写您的基本信息，均为必填。</p>
        <ul class="base-info">
            <li><span>姓名</span><input type="text" placeholder="请填写" v-model="name"></li>
            <li><span>邮箱</span><input type="email" placeholder="请填写" v-model="email"></li>
            <li><span>当前职位</span><input type="text" placeholder="请填写" v-model="post"></li>
            <li><span>当前公司</span><input type="text" placeholder="请填写" v-model="company"></li>
        </ul>
        <p>提交后，您将会受到一份邮件。</p>
        <p>点击邮件中的链接，请在电脑上继续完善简历。</p>
        <input type="button" class="click" v-on:click="ClickMe()" value="提交">
    </div>
</template>
<script>
    import Hello from './Hello.vue'
    export default{

    }
</script>
<style>
    html, body {
        background-color: #f1f1f1;
    }
    *{
        padding:0;
        margin:0;
    }
    .base-info {
        width:100%;
        background-color: #fff;
    }

    .base-info li{
        list-style: none;
        width:100%;
        border-bottom:1px #f7f7f7 solid;
    }
    .base-info li span{
        display: inline-block;
        box-sizing: border-box;
        width:30%;
        text-align: right;
        line-height: 44px;
        padding-right: 5%;
    }
    .base-info li input{
        width:68%;
        padding-left: 2%;
        line-height: 44px;
        border:none;
    }
    .click{
        width:80%;
        height:44px;
        margin-left:10%;
        border-radius: 45px;
        background-color: #41D9C9;
        border:none;
    }
</style>