import Vue from 'vue'
import Home from '../../src/views/Home.vue'

describe('HomeComponent', () => {
  it('teste snapshot', () => {
    const Constuctor = Vue.extend(Home);
    const vm = new Constuctor().$mount();
    expect(vm.$el).toMatchSnapshot();
  })

  it('teste click user', () => {
    expect(Home.methods.clickUser()).toStrictEqual({
      "userButton": true,
      "shieldButton": false
    });
  })

  it('teste click shield', () => {
    expect(Home.methods.clickShield()).toStrictEqual({
      "userButton": false,
      "shieldButton": true
    });
  })
});