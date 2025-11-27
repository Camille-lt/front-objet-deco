/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Indique à Tailwind où trouver les classes à analyser
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 🚨 CRUCIAL : Définit Nunito Sans comme la police par défaut (font-sans)
        'sans': ['var(--font-nunito)', 'sans-serif'], 
        
        // Définit également la police serif sur Nunito (pour couvrir tous les cas)
        'serif': ['var(--font-nunito)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}