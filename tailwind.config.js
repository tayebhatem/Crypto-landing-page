/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      colors:{
        primary:'#0FAE96',
        secondary:'#511281',
         backgorund:'#11011E',
         subtitle:'#808080',
         light:{
          'title':'#ECF1F0',
          'subtitle':'#B6B6B6',
          'grey':'#EAEAEA'
         },
        gery:'#C6C6C6',
        lightSubtitle:'#B6B6B6',
        card:'rgba(255, 255, 255, 0.02)'
      },
      fontFamily:{ 
        inter:['Inter'],
        raleway:['Raleway','sans-serif'],
        roboto:['Roboto','sans-serif']
      },
      screens: {
       
      },
    },
  },
  plugins: [],
}

