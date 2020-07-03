import Vuex from 'vuex'
import vuex from '../../src/store/index'
import { state } from '../../src/store/index'

describe('vuex test', () => {
  it('vuex type', () => {
    expect(typeof new Vuex.Store()).toEqual(typeof vuex);
  })

  it('users initial state', () => {
    expect(state.users).toEqual([]);
  })
});