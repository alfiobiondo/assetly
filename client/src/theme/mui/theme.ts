import { createTheme } from '@mui/material/styles';
import type { ThemeMode } from '../ThemeProvider';
import { getPalette } from './palette';
import { components } from './components';
import { typography } from './typography';
import { radius } from '../config/radius';
import { spacing } from '../config/spacing';
import { getMuiShadows } from './shadows';

function toNumber(px: string) {
	return Number.parseInt(px.replace('px', ''), 10);
}

export function createAppMuiTheme(mode: ThemeMode) {
	return createTheme({
		palette: getPalette(mode),
		shape: {
			borderRadius: toNumber(radius.md),
		},
		spacing: toNumber(spacing.sm),
		shadows: getMuiShadows(),
		typography,
		components,
	});
}
