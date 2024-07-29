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
            },
            fontFamily: {
                'Open Sans': 'OpenSans',
                'Rockwell': 'Rockwell',
                'Nunito' : 'Nunito',
                'Raleway': 'Raleway',
            },
            boxShadow : {
              'intense':'0px 5px 10px 0px rgba(0,0,0,0.5)'
            },
            keyframes: {
                pik : {
                    '50%': {opacity: 0}
                },
            },
            animation: {
              'pikPoint': 'pik .8s step-start infinite',
            }
        },
    },
    plugins: [],
}

