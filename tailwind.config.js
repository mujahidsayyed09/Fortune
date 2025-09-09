/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(224 71% 36%)',
        'primary-foreground': 'hsl(210 20% 98%)',
        secondary: 'hsl(210 40% 96%)',
        'secondary-foreground': 'hsl(222.2 84% 4.9%)',
        accent: 'hsl(217 91% 60%)',
        'accent-foreground': 'hsl(210 40% 98%)',
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 84% 4.9%)',
        muted: 'hsl(210 40% 96%)',
        'muted-foreground': 'hsl(215.4 16.3% 46.9%)',
        border: 'hsl(214.3 31.8% 91.4%)',
        'luxury-gold': 'hsl(43 96% 56%)',
        newblue:'hsl(200 98 42)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'hover-lift': 'hoverLift 0.3s ease-out forwards'
      }
    }
  },
  plugins: [],
};
