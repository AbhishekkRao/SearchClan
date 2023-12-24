/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'map': "url('/src/assets/map.png')",
      },
      colors: {
        "light-yellow": "#FAF8ED",
        "faded-black": "#2D3134",
        "high-green": "#B7E184",
        "light-gray": "#595961",
        "light-orange": "#FFEBCC",
        "pastel-green": "#F1F9E1",
        "pastel-blue": "#E1F2F9",
        "pastel-purple": "#E3E1F9",
        "pastel-red": "#F9E1E1",
        "voilet-text": "#3E4165",
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
};