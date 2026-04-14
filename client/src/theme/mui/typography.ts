import type { CSSProperties } from 'react';
import type { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface TypographyVariants {
		eyebrow: CSSProperties;
		title: CSSProperties;
		subtitle: CSSProperties;
	}

	interface TypographyVariantsOptions {
		eyebrow?: CSSProperties;
		title?: CSSProperties;
		subtitle?: CSSProperties;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		eyebrow: true;
		title: true;
		subtitle: true;
	}
}

export const typography: NonNullable<ThemeOptions['typography']> = {
	fontFamily:
		'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

	h1: {
		fontSize: '3.25rem',
		lineHeight: 1.05,
		fontWeight: 700,
		letterSpacing: '-0.02em',
	},

	h2: {
		fontSize: '1.875rem',
		lineHeight: 1.1,
		fontWeight: 700,
		letterSpacing: '-0.02em',
	},

	h3: {
		fontSize: '1.5rem',
		lineHeight: 1.15,
		fontWeight: 700,
		letterSpacing: '-0.02em',
	},

	subtitle1: {
		fontSize: '1rem',
		lineHeight: 1.6,
		fontWeight: 400,
	},

	subtitle2: {
		fontSize: '0.95rem',
		lineHeight: 1.5,
		fontWeight: 500,
	},

	body1: {
		fontSize: '1rem',
		lineHeight: 1.6,
		fontWeight: 400,
	},

	body2: {
		fontSize: '0.95rem',
		lineHeight: 1.5,
		fontWeight: 400,
	},

	caption: {
		fontSize: '0.75rem',
		lineHeight: 1.2,
		fontWeight: 500,
	},

	button: {
		fontSize: '1rem',
		lineHeight: 1,
		fontWeight: 700,
		textTransform: 'none',
	},

	eyebrow: {
		fontSize: '0.75rem',
		lineHeight: 1,
		fontWeight: 700,
		letterSpacing: '0.08em',
		textTransform: 'uppercase',
	},

	title: {
		fontSize: '2rem',
		lineHeight: 1.1,
		fontWeight: 700,
		letterSpacing: '-0.02em',
	},

	subtitle: {
		fontSize: '1rem',
		lineHeight: 1.6,
		fontWeight: 400,
	},
};
