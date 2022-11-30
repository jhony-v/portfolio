module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          light: 'var(--primary-color-light)',
          lighter: 'var(--primary-color-lighter)',
        },
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        alternative: 'var(--alternative-color)',
        light: '#FFFFFF',
        neutral: 'var(--neutral-color)',
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
