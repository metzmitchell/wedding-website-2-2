import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			serif: [
  				'Source Serif Pro',
  				'Georgia',
  				'Times New Roman',
  				'serif'
  			],
  			sans: [
  				'system-ui',
  				'-apple-system',
  				'sans-serif'
  			],
        handwriting: ['var(--font-homemade-apple)', 'cursive'],
        'dancing-script': ['var(--font-dancing-script)', 'cursive'],
        'playfair': ['var(--font-playfair-display)', 'serif']
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			'card-foreground': 'oklch(0.2174 0.0019 106.5582)',
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			'popover-foreground': 'oklch(0.2726 0.0227 107.8180)',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			'display-large': [
  				'3rem',
  				{
  					lineHeight: '4rem',
  					fontWeight: '300'
  				}
  			],
  			display: [
  				'2.5rem',
  				{
  					lineHeight: '3.25rem',
  					fontWeight: '300'
  				}
  			],
  			h1: [
  				'2.25rem',
  				{
  					lineHeight: '3rem',
  					fontWeight: '400'
  				}
  			],
  			h2: [
  				'1.75rem',
  				{
  					lineHeight: '2.5rem',
  					fontWeight: '400'
  				}
  			],
  			h3: [
  				'1.5rem',
  				{
  					lineHeight: '2rem',
  					fontWeight: '500'
  				}
  			],
  			h4: [
  				'1.25rem',
  				{
  					lineHeight: '1.75rem',
  					fontWeight: '500'
  				}
  			],
  			'body-large': [
  				'1.25rem',
  				{
  					lineHeight: '2rem',
  					fontWeight: '400'
  				}
  			],
  			body: [
  				'1.125rem',
  				{
  					lineHeight: '1.75rem',
  					fontWeight: '400'
  				}
  			],
  			'body-small': [
  				'1rem',
  				{
  					lineHeight: '1.5rem',
  					fontWeight: '400'
  				}
  			],
  			caption: [
  				'0.875rem',
  				{
  					lineHeight: '1.25rem',
  					fontWeight: '400'
  				}
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem',
  			'26': '6.5rem',
  			'30': '7.5rem'
  		},
  		boxShadow: {
  			sm: '0 1px 3px 0px hsla(0, 0%, 0%, 0.05)',
  			DEFAULT: '0 1px 3px 0px hsla(0, 0%, 0%, 0.10), 0 1px 2px -1px hsla(0, 0%, 0%, 0.10)',
  			md: '0 4px 8px 0px hsla(0, 0%, 0%, 0.10), 0 2px 4px -1px hsla(0, 0%, 0%, 0.10)',
  			lg: '0 8px 16px 0px hsla(0, 0%, 0%, 0.10), 0 4px 8px -2px hsla(0, 0%, 0%, 0.10)',
  			xl: '0 16px 32px 0px hsla(0, 0%, 0%, 0.15)'
  		},
  		transitionDuration: {
  			'300': '300ms'
  		},
  		transitionTimingFunction: {
  			out: 'ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
