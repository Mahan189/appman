<template>
 <header>
    <nav class="navbar navbar-expand-sm bg-light">

        <div class="container-fluid">
         
          <!-- Links -->
          <ul class="navbar-nav">
           
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/users">Users</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/posts">posts </router-link>
            </li>
          </ul>
        </div>
      
      </nav>
 </header>
 
</template> 

<script>

export default{
  
}



</script>

<style scoped>
.router-link-active{
  
  color:rgba(0, 0, 0, 0.9) !important ;
  border-bottom: 2px solid rgba(9, 0, 0, 0.933) !important;
}

</style>