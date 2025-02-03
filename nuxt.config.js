export default {
  
  head: {
    title: 'HomePageDesign',
    htmlAttrs: {
      lang: 'en'
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


  css: [
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css',
  ],

  
  plugins: [
  ],

  
  components: true,


  css: [
    '~/assets/css/main.css'
  ],
 
  buildModules: [
   
    '@nuxtjs/tailwindcss',
  ],

  
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  
  build: {
  }
}
