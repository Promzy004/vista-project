 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 -3px 10px 2px #EF4606',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top, #fff 0%, rgba(255, 255, 255, 0) 100%)',
        'hero-gradient': 'linear-gradient(to top, #000 0%, rgba(255, 255, 255, 0) 100%)',
        'boder-gradient': 'linear-gradient(to right, transparent 0%, orange 20%, orange 80%, transparent 100%)',
        'link-gradient': 'radial-gradient(circle at center, blue 20%, transparent 80%)',
        'custom-image': "url('./src/assets/images/hero.png')"
      },
      transformOrigin: {
        'custom': '85% 45%'
      },
      colors: {
        'custom-orange': 'rgb(240, 70, 6)',
        'custom-orange-light': 'rgb(255, 102, 23)',
      }
    },
  },
  plugins: [],
}

