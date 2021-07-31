const colors = require('tailwindcss/colors')
module.exports = {
    // purge: {
    //   enabled: true,
    //   content:['./*.html']
    // },
    purge: ['./*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily:{
                roboto: ['Roboto', 'sans-serif']
            },
            colors:{
                'primary' : '#fa3e57',
            },
        },
        screens:{
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px'
          },
        container:{
            center: true,
            padding: '1rem'
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
            visibility: ['group-hover'],
            position: ['group-hover'],
            transform: ['group-hover'],
            scale: ['group-hover'],
            gap: ['group-hover'],
        },
    },
    plugins: [],
}