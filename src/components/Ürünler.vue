<template>
 
    <div class="main-panel">
   <div class="row" style="margin-top:70px">
      <div class="col-md-2"></div>
      <div class="col-md-9">
          <table class="table">
  <thead class=" text-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Yemek Adı</th>
      <th scope="col">Fiyatı</th>
      <th scope="col">Kategori</th>
      <th scope="col">İşlem</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in itemList" :key="item.id">
      <td  >{{index}}</td>
      <td>{{item.name}}</td>
      <td>{{item.price}} ₺</td>
      <td>{{item.categoryName}}</td>
      <td> <button class="btn-xs btn-fill btn-danger">Sil</button></td>
     
    </tr>
   
  </tbody>
</table>
      </div>
   </div>
  </div>
    
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      itemList:[],

    }
  },

  created(){
    const url = 'http://localhost:81/admin/api/allproduct';
    axios.get(url)
    .then((response) => {
        console.log(response.data);
        this.itemList = response.data;
        
    })
  }

}
</script>

<style>

</style>
