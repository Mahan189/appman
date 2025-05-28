<template>
    <div class="container mt-5">
    <h2>create post:</h2>
    <form @submit.prevent="validate">
        <div class="mb-3">
          <label  class="form-label">Title</label>
          <input type="text" class="form-control"  v-model.lazy.trim="form.title" >
          <div  class="form-text text-danger">{{form.titleErrorText}}</div>
        </div>
        <div class="mb-3">
            <label class="form-label">Body</label>
            <textarea class="form-control" v-model.lazy.trim="form.body">
                
          
             </textarea>
              <div  class="form-text text-danger">{{form.bodyErrorText}}</div>
          </div>
        <button  type="submit" class="btn btn-dark" :disabled="isloading">
            <div v-if="isloading" class="spinner-border spinner-border-sm" role="status"> </div>
            create post
        </button>
      </form>
    </div>

    <!--   -->
</template>
<script setup>
import { reactive } from 'vue';
import axios from '@/assets/axios';
import {ref} from 'vue';
import Swal from 'sweetalert2'

const isloading=ref(false)


const form=reactive({
    title:"",
    titleErrorText:'',
    body:"",
    bodyErrorText:''
})

console.log(form.title ,form.body)

function validate(){
    if(form.title===''){
        form.titleErrorText='title is required '
    }else{
        form.titleErrorText=''
    }

    if(form.body===''){
        form.bodyErrorText='body is required '
    }else{
         form.bodyErrorText=''
    }
    if(form.title !==''&& form.body!==''){
        isloading.value=true
        createpost()
    }
}

async function createpost(){
    try{
        const response= await axios.post("/posts",{
            title:form.title,
            body:form.body,
            userId: 1,
        })
        console.log(response.data)

       

    }catch(error){
        error.value=="finally...."
    }finally{
    
    isloading.value=false

    Swal.fire({
  title: 'Thanks!',
  text: 'post created successfully',
  icon: 'success',
  confirmButtonText: 'ok'
})
    }
}

</script>