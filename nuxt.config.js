import path from 'path'

const srcDir = path.resolve(__dirname, 'src')
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  srcDir,
  telemetry: false,

  publicruntimeconfig: {
    apiVersion: process.env.API_VERSION,
    baseURL: process.env.BASE_URL
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | rest-counters',
    title: 'rest-counters',
    htmlAttrs: {
      lang: 'en'
    },

    server: {
      port: process.env.NODE_ENV == 'production' ? 80 : process.env.PORT
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.scss'],

  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },

  loading: {
    color: '#26bd7e',
    height: '8px',
    continuous: true,
    duration: 3000
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/global', '~/plugins/axios', '~/plugins/api'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    // https://github.com/nuxt-community/google-analytics-module
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: `${process.env.BASE_URL}/${process.env.API_VERSION}`
  },

  styleResources: {
    scss: [
      '~/assets/styles/resources/uses/*.scss',
      '~/assets/styles/resources/variables/*.scss',
      '~/assets/styles/resources/mixins/*.scss',
      '~/assets/styles/resources/extend/*.scss',
      '~/assets/styles/resources/generic/*.scss',
      '~/assets/styles/resources/layout/*.scss',
      '~/assets/styles/resources/elements/*.scss'
    ],
    hoistUseStatements: true
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,

    minimize: true
  },

  alias: {
    '@api': path.resolve(__dirname, './src/api'),
    '@mixins': path.resolve(__dirname, './src/assets/mixins'),
    '@helpers': path.resolve(__dirname, './src/assets/helpers'),
    '@kits': path.resolve(__dirname, './src/components/kits'),
    '@page-components': path.resolve(
      __dirname,
      './src/components/page-components'
    ),
    '@includes': path.resolve(__dirname, './src/components/includes')
  }
}
