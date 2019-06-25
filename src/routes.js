
import Home from './Views/Home.vue'
import Products from './Views/Products.vue'
import Kurye from './components/Kurye.vue'
import Categorys from './components/Categorys.vue'
import AddProduct from './components/ÜrünEkle.vue'
import Rezervasyon from './components/Rezervasyon.vue'
import Kullanici from './components/KullanıcıEkle.vue'

export const routes = [
  {
    path:'*',
    component:Home

  },
  {
    path:'/dashboard',
    name:'Home',
    component:Home
  },
  {
    path:'/products',
    name:'Products',
    component:Products
  },
  {
    path:'/kurye',
    name:'Kurye',
    component:Kurye

  }
  ,{
    path:'/categorys',
    name:'Kategorys',
    component:Categorys

  },
  {
    path:'/addproduct',
    name:'Ürün Ekle',
    component:AddProduct

  },
  {
    path:'/rezervasyon',
    name:'Rezervasyon',
    component:Rezervasyon

  },
  {
    path:'/adduser',
    name:'Kullanici Ekle',
    component:Kullanici

  },
 

]