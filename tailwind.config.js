/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: {
          1: "var(--color-bg-1)",
          2: "var(--color-bg-2)",
          3: "var(--color-bg-3)",
          4: "var(--color-bg-4)",
        },
        text: {
          1: "var(--color-text-1)",
          2: "var(--color-text-2)",
          3: "var(--color-text-3)",
          4: "var(--color-text-4)",
          5: "var(--color-text-5)",
          6: "var(--color-text-6)",
          7: "var(--color-text-7)",
          8: "var(--color-text-8)",
          9: "var(--color-text-9)",
        },
        border: {
          1: "var(--color-border-1)",
          2: "var(--color-border-2)",
        },
      },
    },
  },
  plugins: [],
};
