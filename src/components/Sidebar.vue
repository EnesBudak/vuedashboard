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
         
          <li class="active ">
           
              <a href="/dashboard">
              <i class="tim-icons icon-chart-pie-36"  ></i>
             
              <p>Dashboard</p>
             </a>
            
          </li>
          <li>
            <a href="./icons.html">
              <i class="tim-icons icon-atom"></i>
              <p>Yetkilendirme</p>
            </a>
          </li>
         
          <li>
            <a href="./notifications.html">
              <i class="tim-icons icon-bell-55"></i>
              <p>Kurye Ekle</p>
            </a>
          </li>
          <li>
            <a href="./user.html">
              <i class="tim-icons icon-single-02"></i>
              <p>Siparişer </p>
            </a>
          </li>
          <li>
            
              <router-link tag='a' to='/products' >
                <i class="tim-icons icon-puzzle-10"></i>
               <p>Ürünler </p>
              </router-link>
            
          </li>
          <li>
            <a href="./typography.html">
              <i class="tim-icons icon-align-center"></i>
              <p>Rezervasyon</p>
            </a>
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
