
import Home from './Views/Home.vue'
import Products from './Views/Products.vue'
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
    namae:'Products',
    component:Products
  }

]