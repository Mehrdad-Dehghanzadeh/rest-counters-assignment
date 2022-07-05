import Vue from 'vue'

/*
 * Global component registration in Kits Directory
 ********************************************/
const requireComponent = require.context(
  // The relative path of the components folder
  '../components/kits',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue)$/
)

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName)
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

/*
 * filtres
 *************************/
import { price } from '@helpers/filters'

const filters = {
  price
}

Object.entries(filters).forEach(([name, filter]) => {
  Vue.filter(name, filter)
})
