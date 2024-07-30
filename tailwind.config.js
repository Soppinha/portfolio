/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'yellow-lemonade': '#D7FF01',
                'intense-grey': '#101010',
                'intense-purple': '#990DCE',
                'white': '#D9D9D9',
                'black': '#0D0D0D',
                'moss': '#728607',
                'transparent-purple': '#990DCE7F',
                'purple-dark': '#4A0D5F'
            },
            fontFamily: {
                'Open Sans': 'OpenSans',
                'Rockwell': 'Rockwell',
                'Nunito' : 'Nunito',
                'Raleway': 'Raleway',
            },
            backgroundImage : {
                'banner': "url('/src/presentation/assets/gradient.svg')"
            },
            keyframes: {
                pik : {
                    '50%': {opacity: 0}
                },
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                }
            },
            animation: {
              'pikPoint': 'pik .8s step-start infinite',
              'spin-slow': 'spin 8s linear infinite'
            }
        },
    },
    plugins: [],
}

