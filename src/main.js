import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {

  config: {
    pages: ['pages/index/main', '^pages/question/main', 'pages/result/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'MpVue',
      navigationBarTextStyle: 'black'
    }
  }
}
