<template>
    <!-- <section v-if="route.params.id==undefined "   > -->
    <h1 class="text-center"> user page</h1>
    <p v-if="isloadinga">isloading</p>
    <p v-if="error">{{error}}</p>
 
   <div class="container mt-5">
       <div class="row g-4  ">
         <div class="col-md-3 " v-for="user in users" :key="user.id">
            <CardViwe :user="user"/>
         </div>
        </div>
    </div>
   <!-- </section > -->



    <!-- <router-view v-else/> -->


    
    
    
    
</template>

<script setup>
import CardViwe from '@/components/users/CardViwe.vue'
import axios from '@/assets/axios';
// import { useRoute} from 'vue-router';
import {ref} from 'vue';
const users= ref([])
const isloading=ref(true)
const error=ref(null)
// const route=useRoute()
async function getusers(){
    try{
        const response= await axios.get("/users")
        users.value=response.data
        // console.log(route.params.id)

       

    }catch(error){
        error.value=="finally...."
    }finally{
        isloading.value=false
    }
}
getusers()


</script>