// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{vue,js}',      // Look for Tailwind classes in Vue files under the pages directory
    './components/**/*.{vue,js}',  // Look for Tailwind classes in Vue files under the components directory
    './layouts/**/*.{vue,js}',     // Look for Tailwind classes in Vue files under the layouts directory
    './plugins/**/*.{js,ts}',      // (Optional) Look for Tailwind classes in JavaScript/TypeScript files under the plugins directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


