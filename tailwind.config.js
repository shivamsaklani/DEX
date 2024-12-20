import { Heading } from 'lucide-react';

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
			'box': '0 1px 1px 1px rgba(0,0,0,0.3)',
			'mainbox':'0 -10px 50px 0px rgba(162, 89, 255, 0.5) '
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
			Secondary:'hsl(243, 34, 30)',
			Primary:'hsl(240, 1, 17)',
			other:'hsl(240, 18, 20)',
			Heading:'hsl(0, 0, 100)',

  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
			
				BoxBorder:'',
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

