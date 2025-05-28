import axios from "axios";
const instance= axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/",
    timeout:5000,
  " content-type":"aplication/json "
})

export default instance;
