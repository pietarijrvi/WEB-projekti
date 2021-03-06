import Vue from 'vue'
import App from './App.vue'
import Index from './components/Index.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import ReactionGame from "./components/ReactionGame";
import SpeedClickGame from "./components/SpeedClickGame";
import Login from "./components/Login"
import ProfilePage from "./components/ProfilePage";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
    {path: '/', component: Index},
    {path: '/reaction', component: ReactionGame},
    {path: '/speedgame', component: SpeedClickGame},
    {path: '/login', component: Login},
    {path: '/profile',component: ProfilePage}
];

const router = new VueRouter({
    routes,
    mode:'history'
});


Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
