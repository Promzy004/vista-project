 /** @type {import('tailwindcss').Config} */
 const colors = require('tailwindcss/colors');
 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 -3px 20px 2px #EF4606',
      },
      backgroundImage: {
        //fade effects added at the bottom of a container
        'custom-fade': 'linear-gradient(to top, #000 0%, rgba(255, 255, 255, 0) 100%)',
        'custom-fade-right': 'linear-gradient(to left, #000 0%, rgba(255, 255, 255, 0) 100%)',

        //orange border gradient
        'border-gradient': 'linear-gradient(to right, transparent 0%, rgb(240, 70, 6) 20%, rgb(240, 70, 6) 80%, transparent 100%)',

        //grey border gradient
        'border-gradient2': `linear-gradient(to right, transparent 0%, ${colors.neutral[600]} 20%, ${colors.neutral[600]} 80%, transparent 100%)`,

        'border-3': 'linear-gradient(to bottom, transparent 0%,  rgb(240, 70, 6) 20%, rgb(240, 70, 6) 80%, transparent 100%)',

        //light on border gradient bottom
        'light-effect-bottom': 'radial-gradient(ellipse at bottom, rgba(255,87,34,0.7) 0%, rgba(0,0,0,0) 80%)',

        //light on border gradient at top
        'light-effect-top': 'radial-gradient(ellipse at top, rgba(255,87,34,0.7) 0%, rgba(0,0,0,0) 80%)',

        //light on border gradient left
        'light-effect-left': 'radial-gradient(ellipse at left, rgba(255,87,34,0.7) 0%, rgba(0,0,0,0) 80%)',

        //background image for the hero section
        'custom-image': "url('./src/assets/images/hero.png')"
      },
      transformOrigin: {
        'custom': '85% 45%'
      },
      colors: {
        'custom-orange': 'rgb(240, 70, 6)',
        'custom-orange-light': 'rgb(255, 102, 23)',
      },
      keyframes: {
        navScale: {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
      },
      animation: {
        "nav-scale": "navScale 0.5s linear both" ,
      },
      
    },
  },
  plugins: [],
}

