import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/principal",
      name: "principal",
      component: () => import("./views/Principal.vue")
    }
    ,
    {
      path: "/categorias",
      name: "categorias",
      component: () => import("./components/Categorias.vue")
    }
    ,
    {
      path: "/catalogo",
      name: "catalogo",
      component: () => import("./components/Catalogo.vue")
    }
    ,,
    {
      path: "/carrito",
      name: "carrito",
      component: () => import("./components/Carrito.vue")
    }
  ]
});
