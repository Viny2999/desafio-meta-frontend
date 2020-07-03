import Vue from 'vue'
import Footer from '../../src/components/Footer.vue'

describe('FooterComponent', () => {
  it('teste snapshot', () => {
    const Constuctor = Vue.extend(Footer);
    const vm = new Constuctor().$mount();
    expect(vm.$el).toMatchSnapshot();
  })

  it('fazendo o padding na string da hora corretamente', () => {
    expect(Footer.methods.zeroPadding(0,2)).toBe('00');
  })

  it('setando dia da semana corretamente', () => {
    const dias = {
      0: 'Domingo',
      1: 'Segunda',
      2: 'Terça',
      3: 'Quarta',
      4: 'Quinta',
      5: 'Sexta',
      6: 'Sábado'
    }
    expect(Footer.methods.getDia()).toBe(dias[new Date().getDay()]);
  })
});