import Vue from 'vue'
import VueRouter from 'vue-router'
//import CommonHeader from '@/components/CommonHeader.vue'

import FindingThingInput from '@/views/predict/FindingThingInput.vue'
import FindingThingResult from '@/views/predict/FindingThingResult.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:  '/',
    name: 'home',
    component:() => import('@/views/Home.vue'),
  },
  {
    path:  '/terms',
    name: 'terms',
    component:() => import('@/views/Terms.vue'),
  },
  {
    path: '/predict',
    component:() => import('@/views/predict/Index.vue'),
    children: [
      {
        name: 'predict_finding_thing',
        path: 'finding_thing',
        components: {
          input: FindingThingInput,
          result: FindingThingResult,
        }
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
