import '@mui/material/styles';
import '@mui/material/Button';

declare module '@mui/material/styles' {
	interface Palette {
		brand: {
			primary: string;
			primaryHover: string;
			accent: string;
			accentStrong: string;
			accentText: string;
			accentLink: string;
			accentSoft: string;
			accentSoftHover: string;
			accentHover: string;
			accentBorder: string;
			contrast: string;
		};
		surface: {
			primary: string;
			secondary: string;
			tertiary: string;
			inverse: string;
		};
		border: {
			default: string;
			muted: string;
			strong: string;
			soft: string;
			accent: string;
			accentHover: string;
			dangerSoft: string;
			dashed: string;
		};
		feedback: {
			success: string;
			danger: string;
			dangerStrong: string;
			dangerText: string;
			dangerSoft: string;
			dangerSofter: string;
			dangerBorder: string;
			dangerFocus: string;
			dangerAccent: string;
		};
		focus: {
			ring: string;
		};
	}

	interface PaletteOptions {
		brand?: {
			primary: string;
			primaryHover: string;
			accent: string;
			accentStrong: string;
			accentText: string;
			accentLink: string;
			accentSoft: string;
			accentSoftHover: string;
			accentHover: string;
			accentBorder: string;
			contrast: string;
		};
		surface?: {
			primary: string;
			secondary: string;
			tertiary: string;
			inverse: string;
		};
		border?: {
			default: string;
			muted: string;
			strong: string;
			soft: string;
			accent: string;
			accentHover: string;
			dangerSoft: string;
			dashed: string;
		};
		feedback?: {
			success: string;
			danger: string;
			dangerStrong: string;
			dangerText: string;
			dangerSoft: string;
			dangerSofter: string;
			dangerBorder: string;
			dangerFocus: string;
			dangerAccent: string;
		};
		focus?: {
			ring: string;
		};
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		soft: true;
	}
}
