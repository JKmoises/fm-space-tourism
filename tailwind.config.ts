import type { Config } from 'tailwindcss'

export default {
  content: ["./*.html","./app/**/*.js"],
  theme: {
    extend: {
      colors: {
        "gray-light": "#D0D6F9",
        "gray-dark": "#383B4B",
        "custom-black": "#0B0D17",
      },
      outlineWidth: {
        20: "20px",
      },
      width: {
        "full-400": "400%"
      }
    },
  },
  plugins: [],
} satisfies Config;

