import router from '../../src/router/index'
import { scrollBehavior } from '../../src/router/index'
import VueRouter from "vue-router"

describe('router test', () => {
  it('router type', () => {
    expect(typeof new VueRouter()).toEqual(typeof router);
  })

  it('test scroll behavior 1', () => {
    expect(scrollBehavior(location)).toEqual({ selector: '#/' });
  })

  it('test scroll behavior 2', () => {
    expect(scrollBehavior('#toHash')).toEqual({ x: 0, y: 0 });
  })
});