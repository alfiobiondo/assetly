import type { Components, Theme } from '@mui/material/styles';

export const MuiTextField: Components<Theme>['MuiTextField'] = {
	defaultProps: {
		variant: 'outlined',
		fullWidth: true,
		size: 'medium',
	},
};
