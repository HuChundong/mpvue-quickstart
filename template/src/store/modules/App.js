const state = {
  token: {}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}

const mutations = {
  UPDATE_TOKEN (state, payload) {
    state.token = payload{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    try {
      wx.setStorageSync('token', payload){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    } catch (e) {
      console.error(e){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}

const actions = {
  updateToken ({ state, commit, rootState }, payload) {
    commit('UPDATE_TOKEN', payload){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}

const getters = {
  token: (state, getters, rootState) => {
    return state.token{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}

export default {
  state,
  mutations,
  actions,
  getters{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
