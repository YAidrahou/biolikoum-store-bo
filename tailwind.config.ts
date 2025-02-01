import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-500': 'var(--primary-500)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        text: 'var(--text)',
        cardbg: 'var(--white-color)',
        instock: 'var(--in-stock)',
        lowstock: 'var(--low-stock)',
        outstock: 'var(--out-stock)',
      },
      fontFamily: {
        sans: ['Inter', 'font-mono'], // Custom font family
      },
      spacing: {
        72: '18rem', // Custom spacing
      },
    },
  },
  safelist: [
    "bg-instock",
    "bg-outstock",
    "bg-lowstock"
  ],
  plugins: [],
} satisfies Config;
