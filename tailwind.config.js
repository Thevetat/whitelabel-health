/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                primary: {
                    main: 'hsl(253 38% 25%)',
                    subtle: 'hsl(253 38% 36%)',
                    lighten: 'hsl(253 50% 48%)',
                    muted: 'hsla(253 38% 20% / 0.7)',
                    'muted-xl': 'hsla(253 38% 20% / 0.19999999999999996)',
                    invert: 'hsl(73 38% 75%)',
                    'invert-muted': 'hsla(73 38% 60% / 0.7)',
                },
                secondary: {
                    main: 'hsl(240 5% 24%)',
                    subtle: 'hsl(240 5% 33%)',
                    lighten: 'hsl(240 6% 45%)',
                    muted: 'hsla(240 5% 19% / 0.7)',
                    'muted-xl': 'hsla(240 5% 19% / 0.19999999999999996)',
                    invert: 'hsl(60 5% 76%)',
                    'invert-muted': 'hsla(60 5% 61% / 0.7)',
                },
                accent: {
                    main: 'hsl(21 84% 55%)',
                    subtle: 'hsl(21 84% 44%)',
                    lighten: 'hsl(21 100% 100%)',
                    muted: 'hsla(21 84% 44% / 0.7)',
                    'muted-xl': 'hsla(21 84% 44% / 0.19999999999999996)',
                    invert: 'hsl(201 84% 45%)',
                    'invert-muted': 'hsla(201 84% 36% / 0.7)',
                },
                bg: {
                    main: 'hsl(0 0% 98%)',
                    subtle: 'hsl(0 0% 78%)',
                    lighten: 'hsl(0 0% 100%)',
                    muted: 'hsla(0 0% 78% / 0.7)',
                    'muted-xl': 'hsla(0 0% 78% / 0.19999999999999996)',
                    invert: 'hsl(0 0% 2%)',
                    'invert-muted': 'hsla(0 0% 2% / 0.7)',
                },
                text: {
                    main: 'hsl(254 45% 28%)',
                    subtle: 'hsl(254 45% 39%)',
                    lighten: 'hsl(254 59% 53%)',
                    muted: 'hsla(254 45% 22% / 0.7)',
                    'muted-xl': 'hsla(254 45% 22% / 0.19999999999999996)',
                    invert: 'hsl(74 45% 72%)',
                    'invert-muted': 'hsla(74 45% 58% / 0.7)',
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
