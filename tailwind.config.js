/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "header-form": "url('/header-form-bg.png')",
                "signup-bg": "url('/signup-bg.svg')",
            },
            colors: {
                "primary": "#00ABE1",
                "primary-dark": "#127398",
                "primary-light": "#F5FAFF",
                "secondary": "#FFC730",
            },
        },
    },
    plugins: [],
};
