/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('.', false, /\.js$/){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const modules = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

files.keys().forEach(key => {
  if (key === './index.js') return{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
})

export default modules{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
