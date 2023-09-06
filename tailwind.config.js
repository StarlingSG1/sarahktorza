/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#9747FF',
        gray: {
          "disabled" : "#BABABA"
        },
        black: '#130033',
        "skills": {
          "bg": {
            "canva": "#00C4CC",
          "photoshop": "#001E36",
          "sketchup": "#E7242D",
          "premiere-pro": "#00005B",
          "office-365": "#DC3E14",
          "InDesign": "#49021F",
          },
          "text": {
            "canva": "#FFF",
          "photoshop": "#31A8FF",
          "sketchup": "#FFF",
          "premiere-pro": "#9999FF",
          "office-365": "#FFF",
          "InDesign": "#FF3366",
          }
        }
      }
    },
  },
  plugins: [],
}
