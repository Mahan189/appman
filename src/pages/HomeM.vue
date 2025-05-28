<template>
<div class="container mt-5">
<div class="row">
    <div class="col-md-6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere hic reiciendis ipsa fugiat unde, numquam quibusdam ut earum possimus! Quis cum in doloribus, temporibus eos expedita aliquid alias ipsam?
        </p>
        <router-link class="btn btn-dark" :to="{name:'uersIndex'}">users</router-link>
        <router-link class="btn btn-info ms-2 " :to="{name:'postsIndex'}">posts</router-link>
    </div>
</div>
</div>
<router-view/>


</template>
<script>



</script>