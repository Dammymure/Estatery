/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js', './src/components/Navbar.jsx', './src/pages/About.jsx', './src/pages/Home.jsx', './src/components/Footer.jsx', "./src/pages/Contact.jsx", "./src/pages/Services.jsx", "./src/components/Contact.jsx"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Poppins', 'sans-serif'],
        sharpie: ['Sharpie', 'sans-serif'],
        telma: ['Telma', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], // Add your font here
        tektur: ['Tektur', 'sans-serif'], // Add your font here
        Jakarta: ['Plus Jakarta Sans'] // Add your font here
      },
    },
    screens: {
      xs: '380px',
      sm: '540px',
      md: '720px',
      lg: '920px',
      xl: '1040px',
    }

  },
}
