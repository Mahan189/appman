<template>
   
    
    <h1 class="text-center"> Post page</h1>
    <p v-if="isloadinga">isloading</p>
    <p v-if="error">{{error}}</p>
 
   <div class="container mt-5">
    <router-link class="btn btn-dark  mb-2" :to="{name:'createpost'}">createpost</router-link>
       <div class="row g-4  ">
         <div class="col-md-4" v-for="post in posts" :key="post.id">
            <div class="card">
                <div class="card-header">
                 <router-link  :to="{name:'postId', params:{id:post.id }}"> 
                    {{ post.title }}
                </router-link>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Body: {{post.body}} </li>
                </ul>
              </div>
         </div>
        </div>
    </div> 
  



   


    
    
    
    
</template>

<script setup>

import axios from '@/assets/axios';
import { useRoute} from 'vue-router';
import {ref} from 'vue';
const posts= ref([])
const isloading=ref(true)
const error=ref(null)
const route=useRoute()
async function getposts(){
    try{
        const response= await axios.get("/posts")
        posts.value=response.data
        console.log(route.params.id)

       

    }catch(error){
        error.value=="finally...."
    }finally{
        isloading.value=false
    }
}
getposts()


</script>