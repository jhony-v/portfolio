module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7440e2',
        secondary: '#34d399',
        light: '#FFFFFF',
        dark: {
          100: '#000000',
        },
      },
      spacing: {
        sidebar: 'var(--sidebar-width)',
      },
    },
  },
  plugins: [],
}
