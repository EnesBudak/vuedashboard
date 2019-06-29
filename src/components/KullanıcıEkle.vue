<template>
      <div class="main-panel" >
        <div class="row" style="margin-top:70px">
          <div class="col-md-2"></div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="title">Kullanıcı Ekle</h5>
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
                        <label>Mail</label>
                        <input type="email" class="form-control"  placeholder="Email "  v-model="kullanici.email" >
                      </div>
                    </div>
                    <div class="col-md-4 pl-md-1">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Şifre </label>
                        <input type="password" class="form-control" placeholder="Şifre" v-model="kullanici.password">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 pr-md-1">
                      <div class="form-group">
                        <label>Ad-Soyad </label>
                        <input type="text" class="form-control" placeholder="Ad-Soyad"  v-model="kullanici.name" >
                      </div>
                    </div>
                    <div class="col-md-6 pl-md-1">
                      <div class="form-group">
                        <label>Yetki </label>
                       <select class="form-control" v-model="kullanici.authority">
                         <option disabled value="">Seçiniz </option>
                         <option   :value="yetki.number" v-for="yetki in yetkiList" :key="yetki.number" >{{yetki.derece}} - {{yetki.number}}</option>
                       </select>
                      
                      </div>
                    </div>
                  </div>
                 
                 
                 
                </form>
              </div>
              <div class="card-footer">
                <button type="submit" @click="sendUserDetail" class="btn btn-fill btn-primary">Ekle</button>
               
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
                          İd
                        </th>
                        <th>
                          Email
                        </th>
                        <th>
                         Ad-Soyad
                        </th>
                        <th class="text-center">
                         Yetki Derecesi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in userList" :key="user.id">
                        <td>
                        {{user.id}}
                        </td>
                        <td>
                        {{user.email}}
                        
                        
                        </td>
                        <td>
                        {{user.name}}
                       
                        
                        </td>
                        <td class="text-center">
                        {{user.authority}}
                        
                          
                        </td>
                        <td class="text-center">
                         <button @click="deleteKullanici(user.id)" class="btn btn-fill btn-info">Sil</button>
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
        userList:[],
        yetkiList:[{"derece":"0 Yetki", "number":0},{"derece":"Okuma", "number":1},{"derece":"Okuma-Yazma", "number":2}],
        kullanici:{
        email:'',
        password:'',
        name:'',
        authority:'',


      }


    }
  },
  methods:{

    sendUserDetail(){
      const url = 'http://localhost:81/admin/api/newCalisan'
        if(this.kullanici.mail != '' && this.kullanici.password != '' && this.kullanici.name != '' && this.kullanici.authority != '' ){
                
            axios.post(url,this.kullanici)
            .then( (response) =>{
              console.log(response.data);
              
             if(response.data.status == "ok"){
                 swal("Kullanıcı Başarıyla Eklendi!", "", "success", {
                button: "Devam Et!",
                timer:1500
      }).then(() =>{
        location.reload();
      })
              
                
             }
           
            })

        }else{
      swal("Kullanıcı Eklenemedi!", "", "warning", {
        button: "Devam Et!",
        timer:1500
      });

        }
      

    },
    deleteKullanici(id){
      const url = 'http://localhost:81/admin/api/delCalisan/'+id;

      axios.get(url)
      .then((res)=>{

         if(res.data.status == "ok"){
                 swal("Kullanıcı Başarıyla Silindi!", "", "success", {
                button: "Devam Et!",
                timer:1500
      }).then(() =>{
        location.reload();
      })
              
                
             }else{
                swal("Kullanıcı Silinemedi!", "", "warning", {
        button: "Devam Et!",
        timer:1500
      });

             }
        
      })
      

    }

   

  },
  created(){
    const url = 'http://localhost:81/admin/api/allWorker'
    axios.get(url)
    .then((response) =>{
    
     console.log(response.data);
     
      this.userList = response.data;
      
      

    })

  }


}
</script>

<style>

</style>
