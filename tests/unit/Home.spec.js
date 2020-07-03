import Vue from 'vue'
import Home from '../../src/views/Home.vue'

describe('HomeComponent', () => {
  it('teste snapshot', () => {
    const Constuctor = Vue.extend(Home);
    const vm = new Constuctor().$mount();
    expect(vm.$el).toMatchSnapshot();
  })
});