import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '../App'
const home = r =>require.ensure([],() => r(require('@/components/home')),'home')
const living = r =>require.ensure([],() => r(require('@/components/living')),'living')
const cook = r =>require.ensure([],() => r(require('@/components/cook')),'cook')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
      	{
      		path:'',
      		redirect:'/home'
      	},
      	{
      		path:'/home',
      		component:home
      	},
      	{
      		path:'/living',
      		component:living
      	},
      	{
      		path:'/cook',
      		component:cook
      	}
      ]
    }
  ]
})
