import type { Components, Theme } from '@mui/material/styles';

export const MuiPaper: Components<Theme>['MuiPaper'] = {
	styleOverrides: {
		root: {
			backgroundImage: 'none',
		},
	},
};
