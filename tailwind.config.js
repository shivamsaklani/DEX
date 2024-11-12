/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			'sans': ['ui-sans-serif', 'system-ui',],
			'serif': ['ui-serif', 'Georgia', ],
			'mono': ['ui-monospace', 'SFMono-Regular', ],
			'display': ['Oswald', ],
			'body': ['"Open Sans"', ],
			'Content':["Libre Franklin"],
			'logo':["Anton SC"],
			'Heading':["Raleway"]
		  },
		  boxShadow: {
			'box': '6 35px 60px 15px rgba(20, 1, 0, 0.3)',
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontWeight:{
				Content:'300',
				Heading:'400'
		},
  		colors: {
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
		   Content:'hsl(176, 100%, 100%)'
		
  		}
  	}
  },


  plugins: [require("tailwindcss-animate")],
}

