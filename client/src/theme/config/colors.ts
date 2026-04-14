export const colorSchemes = {
	light: {
		bg: {
			app: '#f9fafb',
			subtle: '#f6f7fb',
			muted: '#f8fafc',
		},

		surface: {
			primary: '#ffffff',
			secondary: '#f8fafc',
			tertiary: '#f3f4f6',
			inverse: '#111827',
		},

		text: {
			primary: '#111827',
			secondary: '#4b5563',
			tertiary: '#374151',
			muted: '#6b7280',
			subtle: '#7b8190',
			strong: '#1f2937',
			accent: '#334155',
			inverse: '#ffffff',
		},

		border: {
			default: '#e5e7eb',
			muted: '#dbe1e7',
			strong: '#d1d5db',
			soft: '#dfe3eb',
			accent: '#cfd6e4',
			accentHover: '#bfc9e6',
			dangerSoft: '#f3b5b5',
			dashed: '#cbd5e1',
		},

		brand: {
			primary: '#111827',
			primaryHover: '#1f2937',
			accent: '#4338ca',
			accentStrong: '#4f46e5',
			accentText: '#1d4ed8',
			accentLink: '#2c50d3',
			accentSoft: '#eef2ff',
			accentSoftHover: '#e5ebff',
			accentHover: '#dbeafe',
			accentBorder: '#bfdbfe',
			contrast: '#ffffff',
		},

		feedback: {
			success: '#15803d',
			danger: '#b91c1c',
			dangerStrong: '#991b1b',
			dangerText: '#7f1d1d',
			dangerSoft: '#fff7f7',
			dangerSofter: '#fef2f2',
			dangerBorder: '#fecaca',
			dangerFocus: '#fca5a5',
			dangerAccent: '#dc2626',
		},

		focus: {
			ring: '#93c5fd',
		},

		badge: {
			neutralBg: '#e2e8f0',
			neutralText: '#1e293b',
		},

		skeleton: {
			base: '#e5e7eb',
			highlight: '#f3f4f6',
		},

		gradient: {
			brand: 'linear-gradient(135deg, #111827 0%, #334155 100%)',
		},
	},

	dark: {
		bg: {
			app: '#0b0f1a',
			subtle: '#0f172a',
			muted: '#111827',
		},

		surface: {
			primary: '#111827',
			secondary: '#1f2937',
			tertiary: '#374151',
			inverse: '#ffffff',
		},

		text: {
			primary: '#f9fafb',
			secondary: '#d1d5db',
			tertiary: '#9ca3af',
			muted: '#6b7280',
			subtle: '#9ca3af',
			strong: '#ffffff',
			accent: '#cbd5f5',
			inverse: '#111827',
		},

		border: {
			default: '#1f2937',
			muted: '#374151',
			strong: '#4b5563',
			soft: '#374151',
			accent: '#4f46e5',
			accentHover: '#6366f1',
			dangerSoft: '#7f1d1d',
			dashed: '#374151',
		},

		brand: {
			primary: '#f9fafb',
			primaryHover: '#e5e7eb',
			accent: '#6366f1',
			accentStrong: '#818cf8',
			accentText: '#93c5fd',
			accentLink: '#a5b4fc',
			accentSoft: '#1e1b4b',
			accentSoftHover: '#312e81',
			accentHover: '#1e3a8a',
			accentBorder: '#3730a3',
			contrast: '#ffffff',
		},

		feedback: {
			success: '#22c55e',
			danger: '#ef4444',
			dangerStrong: '#dc2626',
			dangerText: '#fecaca',
			dangerSoft: '#1f0a0a',
			dangerSofter: '#2b0b0b',
			dangerBorder: '#7f1d1d',
			dangerFocus: '#b91c1c',
			dangerAccent: '#ef4444',
		},

		focus: {
			ring: '#60a5fa',
		},

		badge: {
			neutralBg: '#1f2937',
			neutralText: '#e5e7eb',
		},

		skeleton: {
			base: '#1f2937',
			highlight: '#374151',
		},

		gradient: {
			brand: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
		},
	},
} as const;

export const colors = colorSchemes.light;

export type ColorMode = keyof typeof colorSchemes;
export type Colors = (typeof colorSchemes)[ColorMode];
