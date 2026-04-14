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
import '../LoginPage/LoginPage.css';
import { Spinner } from '../../components/Spinner/Spinner';
import { radius } from '../../theme/config/radius';

export function SignupPage() {
	const { signup, isLoading, error } = useAuth();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		signup({ name, email, password });
	}

	return (
		<Box
			className='auth-page'
			sx={{
				backgroundColor: 'background.default',
			}}
		>
			<Box className='auth-page__shell'>
				<Stack direction='row' spacing={3} className='auth-page__brand'>
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

					<Stack spacing={1} sx={{ minWidth: 0 }}>
						<Typography variant='eyebrow' sx={{ color: 'text.secondary' }}>
							Wealthype
						</Typography>

						<Typography
							variant='title'
							component='h1'
							sx={{ color: 'text.primary' }}
						>
							Create your account
						</Typography>

						<Typography
							variant='subtitle'
							sx={{ color: 'text.secondary' }}
							className='auth-page__subtitle'
						>
							Start tracking your saved assets with a personal watchlist.
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
						borderRadius: radius.xl,
						boxShadow: theme.shadows[9],
						backgroundColor: theme.palette.background.paper,
					})}
				>
					<Stack spacing={1}>
						<Typography variant='h3' component='h2'>
							Sign up
						</Typography>

						<Typography variant='body2' color='text.secondary'>
							Create an account to save and manage your watchlist.
						</Typography>
					</Stack>

					<Stack spacing={2}>
						<Stack spacing={1}>
							<Typography
								variant='body2'
								component='label'
								htmlFor='signup-name'
								sx={{ fontWeight: 600, color: 'text.primary' }}
							>
								Name
							</Typography>

							<TextField
								id='signup-name'
								type='text'
								placeholder='Your name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Stack>

						<Stack spacing={1}>
							<Typography
								variant='body2'
								component='label'
								htmlFor='signup-email'
								sx={{ fontWeight: 600, color: 'text.primary' }}
							>
								Email
							</Typography>

							<TextField
								id='signup-email'
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
								htmlFor='signup-password'
								sx={{ fontWeight: 600, color: 'text.primary' }}
							>
								Password
							</Typography>

							<TextField
								id='signup-password'
								type='password'
								placeholder='At least 6 characters'
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
								{/* <span>Creating account...</span> */}
							</Box>
						) : (
							'Create account'
						)}
					</Button>

					{error ? (
						<Typography variant='body2' color='error.main'>
							{error instanceof Error ? error.message : 'Signup failed'}
						</Typography>
					) : null}

					<Typography variant='body2' color='text.secondary'>
						Already have an account?{' '}
						<Link
							component={RouterLink}
							to='/login'
							underline='hover'
							sx={{ fontWeight: 600 }}
						>
							Log in
						</Link>
					</Typography>
				</Paper>
			</Box>
		</Box>
	);
}
