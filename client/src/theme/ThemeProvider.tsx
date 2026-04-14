import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
	type ReactNode,
} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createAppMuiTheme } from './mui/theme';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
	theme: ThemeMode;
	toggleTheme: () => void;
	setTheme: (theme: ThemeMode) => void;
}

const THEME_KEY = 'theme';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getInitialTheme(): ThemeMode {
	const savedTheme = localStorage.getItem(THEME_KEY);

	if (savedTheme === 'light' || savedTheme === 'dark') {
		return savedTheme;
	}

	return 'light';
}

interface AppThemeProviderProps {
	children: ReactNode;
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
	const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem(THEME_KEY, theme);
	}, [theme]);

	function toggleTheme() {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	}

	const contextValue = useMemo(
		() => ({
			theme,
			toggleTheme,
			setTheme,
		}),
		[theme]
	);

	const muiTheme = useMemo(() => createAppMuiTheme(theme), [theme]);

	return (
		<ThemeContext.Provider value={contextValue}>
			<MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
		</ThemeContext.Provider>
	);
}

export function useThemeContext() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useThemeContext must be used within an AppThemeProvider');
	}

	return context;
}
