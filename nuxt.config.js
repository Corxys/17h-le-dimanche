export default {
  target: 'static',
  // source directory
  srcDir: 'src',
  // build output directory
  buildDir: 'dist',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '17h-le-dimanche',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // reset CSS, see : https://nicolas-cusan.github.io/destyle.css/
    'node_modules/destyle.css/destyle.min.css',
    '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/router-extras',
    ['@nuxtjs/google-fonts',
      {
        families: {
          'DM+Sans': [400, 500, 600],
          'DM+Serif+Display': [400]
        }
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-svg-loader'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        additionalData: `
          @import "@/assets/styles/variables";
        `
      }
    }
  },

  server: {
    host: '0.0.0.0'
  }
}
