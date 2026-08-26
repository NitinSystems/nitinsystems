/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        cloud: "#F5F7FA",
        line: "#E3E7EC",
        ink: {
          DEFAULT: "#12181F",
          soft: "#4B5560",
          muted: "#8A94A0",
        },
        cobalt: {
          DEFAULT: "#2F5FD0",
          dark: "#20419C",
          light: "#EBF1FF",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(18, 24, 31, 0.05)",
        "card-hover": "0 12px 30px -4px rgba(18, 24, 31, 0.08)",
        glass: "0 8px 32px 0 rgba(18, 24, 31, 0.04)",
      },
    },
  },
  plugins: [],
};
