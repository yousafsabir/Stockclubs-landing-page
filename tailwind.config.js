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
                "brokerage-bg": "url('/brokerage-bg.svg')",
                "track-bg": "url('/track-bg.svg')",
                "automate-bg": "url('/automate-bg.svg')",
                "automate-card-bg": "url('/automate-pic-base.svg')",
                "reports-bg": "url('/reports-bg.svg')",
                "reports-card-bg": "url('/reports-pic-base.svg')",
                "reports-card-2-bg": "url('/reports-pic-base-2.svg')",
                "security-bg": "url('/security-bg.svg')",
                "contact-us-bg": "url('/contact-us-bg.svg')",
            },
            colors: {
                "primary": "#00ABE1",
                "primary-dark": "#127398",
                "primary-light": "#F5FAFF",
                "primary-light-2": "#BFEAF7",
                "secondary": "#FFC730",
            },
        },
    },
    plugins: [],
};
