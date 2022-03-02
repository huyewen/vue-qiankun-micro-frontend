import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

const appOptions = {
  el: '#microApp',
  router,
  store,
  render: (h) => h(App)
}

if (!window.singleSpaNavigate) {
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}

const vueLifecycle = singleSpaVue({
  Vue,
  appOptions
})

export function bootstrap (customProps = {}) {
  console.log('app1: bootstrap')
  return vueLifecycle.bootstrap(customProps)
}

export function mount (customProps = {}) {
  console.log('app1: mount')
  return vueLifecycle.mount(customProps)
}

export function unmount (customProps = {}) {
  console.log('app1: unmount')
  return vueLifecycle.unmount(customProps)
}

export function update (customProps = {}) {
  console.log('app1: update')
  return vueLifecycle.update(customProps)
}
