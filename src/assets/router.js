import { createRouter, createWebHistory } from 'vue-router';

import HomeM from '@/pages/HomeM.vue'

import IndexUser from '@/pages/Users/IndexUser.vue'
import ShowUser from '@/pages/Users/ShowUser.vue'
import TemplateUser from '@/pages/Users/TemplateUser.vue';

import IndexPost from '@/pages/Post/IndexPost.vue'
import ShowPost from '@/pages/Post/ShowPost.vue'
import TempletePost from '@/pages/Post/TempletePost.vue'; 
import CreatePost from '@/pages/Post/CreatePost.vue'
import  EditPost from '@/pages/Post/EditPost.vue'

const routes = [
  {path:'/',name:"Home", component:HomeM},

  {path:'/users',name:"users", component:TemplateUser ,children:[
    {path:'',name:"uersIndex", component:IndexUser},
    {path:':id',name:"userId", component:ShowUser}
  ]},

  {path:'/posts',name:"templatepost", component:TempletePost ,children:[
    {path:'',name:"postsIndex", component:IndexPost},
    {path:':id',name:"postId", component:ShowPost},
    {path:'create',name:"createpost", component:CreatePost},
    {path:'edit/:id',name:"editpost", component:EditPost}
  ]}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;