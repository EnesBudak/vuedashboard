<template>
    <div class="sidebar">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red"
    -->
      <div class="sidebar-wrapper">
        <div class="logo">
          <a href="javascript:void(0)" class="simple-text logo-mini">
            ZU
          </a>
          <a href="javascript:void(0)" class="simple-text logo-normal">
            Zeki Usta 
          </a>
        </div>
        <ul class="nav">
         
          <li >
           
             <router-link tag="a" to="/dashboard">
              <i class="tim-icons icon-chart-bar-32"  ></i>
             
              <p>Dashboard</p>
           </router-link>
            
          </li>
          <!--
          <li>
            <a href="./icons.html">
              <i class="tim-icons icon-atom"></i>
              <p>Yetkilendirme</p>
            </a>
          </li>
-->
           <li>
             <router-link tag="a" to="/adduser">
              <i class="tim-icons icon-single-02"></i>
              <p>Kullanıcı Ayarları</p>
            </router-link>
          </li>
         
           <li>
            
              <router-link tag='a' to='/kurye' >
                <i class="tim-icons icon-simple-add"></i>
               <p>Kurye Ekleme </p>
              </router-link>
            
          </li> 
           <li>
            
              <router-link tag='a' to='/addproduct' >
                <i class="tim-icons icon-simple-add"></i>
               <p>Ürün Ekleme </p>
              </router-link>
            
          </li> 
           
          <li>
            
              <router-link tag='a' to='/products' >
                <i class="tim-icons icon-cart"></i>
               <p>Ürünler </p>
              </router-link>
            
          </li>
          <li>
            
              <router-link tag='a' to='/categorys' >
                <i class="tim-icons icon-bullet-list-67"></i>
               <p>Kategoriler </p>
              </router-link>
            
          </li>
          <li>
            <router-link tag='a' to='/rezervasyon'>
              <i class="tim-icons icon-align-center"></i>
              <p>Rezervasyon</p>
           </router-link>
          </li>
           <li>
            <router-link tag='a' to='/satistakip'>
              <i class="tim-icons icon-basket-simple"></i>
              <p>Satış Takip</p>
           </router-link>
          </li>
         
         
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },

  methods: {
    
   
  },

}
</script>

<style>

</style>
