/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        //color palette refrence : https://coolors.co/582f0e-7f4f24-936639-a68a64-b6ad90-c2c5aa-a4ac86-656d4a-414833-333d29

        Steal_brown:'#582f0e',
        Russet: '#7F4F24',
        Raw_umber: '#936639',
        primary: '#936639',
        Lion: '#a68a64',
        Khaki: '#b6ad90',
        Sage: '#c2c5aa',
        Sage2: '#a4ac86',
        Reseda_green: '#656d4a',
        Ebony: '#414833',
        Black_green: '#333d29',
      },
    },
  },
  plugins: [],
}
