/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const prefix = "";
export const theme = {
  container: {
    "center": true,
    "padding": "2rem",
    "screens": {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      "yellow-lemonade": "#D7FF01",
      "intense-grey": "#09040E",
      "intense-purple": "#990DCE",
      "white": "#D9D9D9",
      "purple-black": "#0E0913",
      "transparent-purple": "rgba(186,3,255,0.5)",
      "purple-dark": "#2D003E"
    },
    fontFamily: {
      "Open Sans": "OpenSans",
      "Rockwell": "Rockwell",
      "Nunito": "Nunito",
      "Raleway": "Raleway",
    },
    backgroundImage: {
      "banner": "url('/src/ui/assets/gradient.svg')",
      "web": "url('/src/ui/assets/web.svg')",
      "number": "url('/src/ui/assets/bg-number.svg')"
    },
    keyframes: {
      "pik": {
        "50%": { opacity: 0 },
      },
      "spin": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
      "marquee-vertical": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(calc(-100% - var(--gap)))" },
      },
    },
    animation: {
      "pikPoint": "pik .8s step-start infinite",
      "spin-slow": "spin 8s linear infinite",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      marquee: "marquee var(--duration) linear infinite",
      "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
    },
  },
};
export const plugins = [];
