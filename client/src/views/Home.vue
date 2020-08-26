<template>
  <div
    data-v-2c855746
    data-v-60a810db
    class="layout background align-center justify-center column fill-height"
  >
    <div data-v-2c855746 class="v-card v-card--flat v-sheet theme--light">
      <div data-v-2c855746 class="v-card__title mt-5">
        <div data-v-2c855746 class="text-xs-center mt-5">
          <img
            data-v-2c855746
            width="60%"
            src="../assets/logo.c752bf8f.png"
            class="animated fadeIn mt-5"
          />
          <h3 data-v-2c855746 class="mt-3" style="color: white;">
            Ingresa el número de teléfono
            <br data-v-2c855746 />de tu asesora independiente.
          </h3>
        </div>
      </div>
      <div data-v-2c855746 class="v-card__text">
        <form data-v-2c855746 novalidate="novalidate" class="v-form">
          <div
            data-v-2c855746
            class="v-input v-text-field v-text-field--enclosed v-text-field--outline theme--light"
          >
            <div class="v-input__control">
              <div class="v-input__slot">
                <div class="v-text-field__slot">
                  <label
                    aria-hidden="true"
                    class="v-label theme--light"
                    style="left: 0px; right: auto; position: absolute;"
                  >Telefono</label>
                  <input aria-label="Telefono" type="tel" maxlength="12" />
                </div>
              </div>
              <div class="v-text-field__details">
                <div class="v-messages theme--light">
                  <div class="v-messages__wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div data-v-2c855746 class="v-card__actions">
        <div data-v-2c855746 class="layout align-center">
          <div data-v-2c855746 class="flex xs12 sm12 text-xs-center">
            <button
              data-v-2c855746
              type="button"
              class="white--text v-btn v-btn--flat theme--light"
              @click="$router.push('categorias')"
            >
              <div class="v-btn__content"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
};
</script>

<style>
</style>


