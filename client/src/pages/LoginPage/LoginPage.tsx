import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
	Box,
	Button,
	Link,
	Paper,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { useAuth } from '../../features/auth/hooks/useAuth';
import './LoginPage.css';
import { Spinner } from '../../components/Spinner/Spinner';

export function LoginPage() {
	const { login, isLoading, error } = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		login({ email, password });
	}

	return (
		<Box
			className='auth-page'
			sx={{
				backgroundColor: 'background.default',
			}}
		>
			<Box className='auth-page__shell'>
				<Stack
					direction='row'
					spacing={3}
					className='auth-page__brand'
					sx={{
						alignItems: 'flex-start',
						position: 'relative',
						zIndex: 1,
					}}
				>
					<Box
						className='auth-page__brand-mark'
						sx={{
							borderRadius: '20px',
							background: 'var(--gradient-brand)',
							color: 'var(--color-brand-contrast)',
						}}
					>
						W
					</Box>

					<Stack
						spacing={1}
						sx={{
							minWidth: 0,
							maxWidth: 520,
							position: 'relative',
							zIndex: 1,
						}}
					>
						<Typography variant='eyebrow' sx={{ color: 'text.secondary' }}>
							Wealthype
						</Typography>

						<Typography
							variant='title'
							component='h1'
							sx={{ color: 'text.primary' }}
						>
							Welcome back
						</Typography>

						<Typography variant='subtitle' sx={{ color: 'text.secondary' }}>
							Log in to access your dashboard and personal watchlist.
						</Typography>
					</Stack>
				</Stack>

				<Paper
					component='form'
					onSubmit={handleSubmit}
					elevation={0}
					sx={(theme) => ({
						p: 4,
						display: 'flex',
						flexDirection: 'column',
						gap: 3,
						border: `1px solid ${theme.palette.border.soft}`,
						borderRadius: '24px',
						boxShadow: theme.shadows[3],
						backgroundColor: theme.palette.background.paper,
						position: 'relative',
						zIndex: 0,
					})}
				>
					<Stack spacing={1}>
						<Typography variant='h3' component='h2'>
							Log in
						</Typography>

						<Typography variant='body2' color='text.secondary'>
							Use your credentials to continue.
						</Typography>
					</Stack>

					<Stack spacing={2}>
						<Stack spacing={1}>
							<Typography
								variant='body2'
								component='label'
								htmlFor='login-email'
								sx={{ fontWeight: 600, color: 'text.primary' }}
							>
								Email
							</Typography>

							<TextField
								id='login-email'
								type='email'
								placeholder='you@example.com'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</Stack>

						<Stack spacing={1}>
							<Typography
								variant='body2'
								component='label'
								htmlFor='login-password'
								sx={{ fontWeight: 600, color: 'text.primary' }}
							>
								Password
							</Typography>

							<TextField
								id='login-password'
								type='password'
								placeholder='Your password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</Stack>
					</Stack>

					<Button type='submit' variant='soft' disabled={isLoading} fullWidth>
						{isLoading ? (
							<Box className='auth-card__submit-content'>
								<Spinner />
								{/* <span>Logging in...</span> */}
							</Box>
						) : (
							'Log in'
						)}
					</Button>

					{error ? (
						<Typography variant='body2' color='error.main'>
							{error instanceof Error ? error.message : 'Login failed'}
						</Typography>
					) : null}

					<Typography variant='body2' color='text.secondary'>
						Don&apos;t have an account?{' '}
						<Link
							component={RouterLink}
							to='/signup'
							underline='hover'
							sx={{ fontWeight: 600 }}
						>
							Create one
						</Link>
					</Typography>
				</Paper>
			</Box>
		</Box>
	);
}
