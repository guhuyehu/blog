import Vue from 'vue';
import VueRouter from 'vue-router';

const FooPage = () => import('@report/components/home');
const newblog = () => import('@report/components/newblog');
const details = () => import('@report/components/details');
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: FooPage,
  },
  {
    path: '/new',
    component: newblog,
  },
  {
    path: '/details',
    // name: 'sadasd'?,
    component: details
  }
];

const router = new VueRouter({
  base: '/report',
  mode: 'history',
  routes
});

export default router;
