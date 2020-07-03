import Vue from 'vue'
import App from '../../src/App.vue'

describe('AppComponent', () => {
  it('teste snapshot', () => {
    const Constuctor = Vue.extend(App);
    const vm = new Constuctor().$mount();
    expect(vm.$el).toMatchSnapshot();
  })
});