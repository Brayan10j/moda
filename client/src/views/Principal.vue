<template>
  <div>
    <nav
      data-v-60a810db
      class="elevation-1 v-toolbar v-toolbar--dense v-toolbar--fixed theme--dark accent"
      style="margin-top: 0px; padding-right: 0px; padding-left: 0px; transform: translateY(0px);"
      data-booted="true"
    >
      <div class="v-toolbar__content" style="height: 48px;">
        <div
          data-v-60a810db
          class="v-toolbar__title primary--text animated bounceInLeft toolbar-text"
        >Cliente Pruebas</div>
        <div data-v-60a810db class="spacer"></div>
        <a
          data-v-60a810db
          href="tel:786-547-0213"
          class="animated zoomIn v-btn v-btn--flat v-btn--icon theme--dark primary--text"
        >
          <div class="v-btn__content">
            <i data-v-60a810db aria-hidden="true" class="v-icon material-icons theme--dark">phone</i>
          </div>
        </a>
        <button
          data-v-60a810db
          type="button"
          class="animated zoomIn v-btn v-btn--flat v-btn--icon theme--dark primary--text"
        >
          <div class="v-btn__content">
            <i
              data-v-60a810db
              aria-hidden="true"
              class="v-icon material-icons theme--dark"
            >exit_to_app</i>
          </div>
        </button>
      </div>
    </nav>

    
    

    <div
      data-v-60a810db
      class="v-item-group v-bottom-nav theme--light v-bottom-nav--fixed v-bottom-nav--active"
      style="height: 56px;"
    >
      <a
        data-v-60a810db
        class="v-btn--active v-btn v-btn--active v-btn--flat v-btn--router theme--light primary--text"
        value="categorias"
        href="/categorias"
        aria-current="page"
      >
        <div class="v-btn__content">
          <span data-v-60a810db class="btn-text">Categorías</span>
          <i data-v-60a810db class="mdi mdi-24px mdi-home-outline"></i>
        </div>
      </a>
      <a
        data-v-60a810db
        href="/catalogo"
        value="catalogo"
        class="v-btn v-btn--flat theme--light primary--text"
      >
        <div class="v-btn__content">
          <span data-v-60a810db class="btn-text">Catálogo</span>
          <i data-v-60a810db class="mdi mdi-24px mdi-badge-account-outline"></i>
        </div>
      </a>
      <button
        data-v-60a810db
        type="button"
        value="stock"
        class="v-btn theme--light"
        style="display: none;"
      >
        <div class="v-btn__content">
          <span data-v-60a810db class="btn-text">Stock</span>
          <i data-v-60a810db class="mdi mdi-24px mdi-badge-account-outline"></i>
        </div>
      </button>
      <a
        data-v-60a810db
        href="/carrito"
        class="v-btn v-btn--flat v-btn--router theme--light primary--text"
        value="carrito"
      >
        <div class="v-btn__content">
          <span data-v-60a810db class="btn-text">Carrito</span>
          <span data-v-60a810db class="v-badge v-badge--overlap" right style="z-index: 10000;">
            <!---->
          </span>
          <i data-v-60a810db class="mdi mdi-24px mdi-cart-outline"></i>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Categorias from "@/components/Categorias.vue";
import Catalogo from "@/components/Catalogo.vue";
import Carrito from "@/components/Carrito.vue";

export default {
  data: {
    paginaActual: Categorias
  }, 
  name: "principal",
  components: {
    Categorias,
    Catalogo,
    Carrito
  }
};
</script>