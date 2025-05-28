<template>
    <h1 class="text-center"> Post page</h1>
    <p v-if="isloadinga">isloading</p> 
    <p v-if="error">{{error}}</p>
 
    <div class="container mt-5">
                     <div class="card " >
                         <div class="card-header">
                         
                             {{ post.title }}
                        
                         </div>
                         <ul class="list-group list-group-flush">
                           <li class="list-group-item">Body: {{post.body}} </li>
                         </ul>
                         <div class="card-footer">
                            <button class="btn btn-sm btn-danger me-4">Delete</button>
                            <router-link :to="{name:'editpost', params:{id:post.id}}" class="btn btn-sm btn-dark">Edit</router-link>

                         </div>
                       </div>
    </div>

</template>

<script setup>
import axios from '@/assets/axios';
import { useRoute } from 'vue-router';
import {ref} from 'vue';
const post= ref({})
const isloading=ref(true)
const error=ref(null)
const route=useRoute() 

async function getuser(){
    try{
        const response= await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        post.value=response.data
       console.log(route.params)
       
       
        
       

    }catch(error){
        error.value=="finally...."
    }finally{
        isloading.value=false
    }
}
getuser()


</script>