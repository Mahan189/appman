<template>
    <h1 class="text-center"> user page</h1>
    <p v-if="isloadinga">isloading</p>
    <p v-if="error">{{error}}</p>
 
   <div class="container mt-5">
       <div class="row g-4  ">
         <div class="col-md-3 " >
            <CardViwe :user="user "/>
         </div>
        </div>
    </div>


</template>

<script setup>
import CardViwe from '../../components/users/CardViwe.vue'
import axios from '@/assets/axios';
import { useRoute } from 'vue-router';
import {ref} from 'vue';
const user= ref({})
const isloading=ref(true)
const error=ref(null)
const route=useRoute() 

async function getuser(){
    try{
        const response= await axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        user.value=response.data
       console.log(route.params)
       
       
        
       

    }catch(error){
        error.value=="finally...."
    }finally{
        isloading.value=false
    }
}
getuser()


</script>