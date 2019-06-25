<template>
      <div class="main-panel" >
        <div class="row" style="margin-top:70px">
          <div class="col-md-2"></div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="title">Ürün Ekle</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-5 pr-md-1">
                      <div class="form-group">
                        <label>Şirket </label>
                        <input type="text" class="form-control" disabled="" placeholder="Zeki Usta" >
                      </div>
                    </div>
                    <div class="col-md-3 px-md-1">
                      <div class="form-group">
                        <label>Ürün Adı</label>
                        <input type="text" class="form-control" placeholder="Ürün Adı" v-model="product.name" >
                      </div>
                    </div>
                    <div class="col-md-4 pl-md-1">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Fiyat </label>
                        <input type="number" class="form-control" placeholder="Fiyat" v-model="product.price">
                      </div>
                    </div>
                    
                  </div>
                  <div class="row">
                    <div class="col-md-3 pr-md-1">
                      <div class="form-group">
                        <label>Kategori </label>
                       <select class="form-control"  v-model="product.categoryId">
                         <option disabled value="">Seçiniz </option>
                         <option  :value="category.id"   v-for="category in categoryList"  :key="category.id">{{category.id}} : {{category.name}}</option>
                       </select>
                      </div>
                      
                    </div>
                    <div class="col-md-6 pl-md-2">
                      <div class="form-group">
                        <label>Açıklama </label>
                        <textarea type="text" class="form-control" placeholder="Açıklama" v-model="product.card_text" > </textarea>
                      </div>
                    </div>
                   
                  </div>
                 
                 
                 
                </form>
              </div>
              <div class="card-footer">
                <button @click="addProduct" type="submit" class="btn btn-fill btn-primary">Kaydet</button>
              
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-user">
             <div class="card-body">
                <div class="table-responsive" style="overflow:auto">
                  <table class="table tablesorter " id="">
                    <thead class=" text-primary">
                      <tr>
                        <th>
                          Ürün Adı
                        </th>
                        <th>
                          Fiyatı
                        </th>
                        <th>
                          Kategori
                        </th>
                        <th class="text-center">
                          Açıklama
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr  v-for="product in productList" :key="product.id">
                        <td>
                        {{product.name}} 
                        
                
                        </td>
                        <td>
                        {{product.price}} ₺

                        </td>
                        <td>
                        {{product.categoryName}}
                        
                        </td>
                        <td class="text-center">
                        {{product.cardText}}
                       
                          
                        </td>
                        <td class="text-center">
                         <button  @click="deleteProduct(product.id)" class="btn btn-fill btn-info">Sil</button>
                        </td>
                      </tr>
                   
                    </tbody>
                  </table>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
 
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'
export default {
  data(){
    return{
          categoryList:[],
          productList:[],
          kuryeList:[],
        
      product:{
        name:'',
        price:'',
        card_text:'',
        numberProduct:0,
        categoryId:0,
        store:'',
        


      }


    }
  },
  methods:{

    deleteProduct(id){
       const url = 'http://localhost:81/admin/api/product/del/'+id;

       axios.get(url)
    },

    addProduct(){
      const url = 'http://localhost:81/admin/api/newProduct'
      if(this.product.name != '' && this.product.price !='' && this.product.categoryId !=null ){
        
        axios.post(url,this.product)
      .then((res) =>{
        console.log(res);
        
           if(res.data.status == "ok"){
                 swal("Ürün Başarıyla Eklendi!", "", "success", {
                button: "Devam Et!",
                timer:1500
      }).then(() =>{
        location.reload();
      })
              
                
             }
          
      })

      }
      else{

      swal("Ürün Eklenemedi!", "", "warning", {
        button: "Devam Et!",
        timer:1500
      });
      }
     
      
    },
    deleteProduct(id){
      const url = 'http://localhost:81/admin/api/product/del/'+id;
      
      axios.get(url)
      .then((res) => {
          console.log(res);

           if(res.data.status == "ok"){
                 swal("Ürün Başarıyla Silindi!", "", "success", {
                button: "Devam Et!",
                timer:1500
      }).then(() =>{
        location.reload();
      })
              
                
             }else{
                swal("Ürün Silinemedi!", "", "warning", {
        button: "Devam Et!",
        timer:1500
      });

             }
          
      })

    }
  

   

  },
  created(){
    const url = 'http://localhost:81/admin/api/allCateogry'
    axios.get(url)
    .then((response) =>{
    
    
        this.categoryList = response.data;
       
  

    });

    const url2 = 'http://localhost:81/admin/api/allproduct'
    axios.get(url2)
    .then((res) =>{
    
          
        this.productList = res.data;
          
          
        
      
      

    });




  }


}
</script>

<style>

</style>
