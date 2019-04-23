<template>
    <div class="test">
    <!--  获取数据  -->
        <h1>Test{{title}}</h1>
        <p>{{user.firstName}}</p>
        <p v-text="user.lestName" ></p>
        <!-- v-If -->
        <p v-if="showName" >{{user.firstName}}</p>
        <!-- v-else -->
        <p v-else>13213123 </p>
        <!-- v-for -->
        <ul>
            <li v-for="item in Items" :key="item.id">{{item.title}}</li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'test',
    data(){
        return{
            title: 'Hello Vue.js!',
            user : {
                firstName: "Hivana",
                lestName : "Dva"
            },
            showName: false,
            Items   : [
                {title:"item1"},
                {title:"item2"},
                {title:"item3"}
            ]
        }
    }
}
</script>


<style scoped>
    
</style>





























