// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hyper: {
          bg: '#090A0D',        // Void Black
          surface: '#16181D',   // Dark Gray Surface
          primary: '#00D084',   // Hyper Emerald
          secondary: '#1F2229', // Lighter Surface
          text: '#F8F9FA',      // Crisp White
          muted: '#6C757D',
        },
      },
      fontFamily: {
        // Sử dụng Inter hoặc Geist để có cảm giác tối giản, hiện đại
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config