import { Router } from 'express';
import { login, signup, getCurrentUser } from '../services/auth.service';
import { requireAuth } from '../middleware/requireAuth';

export const authRouter = Router();

authRouter.post('/signup', async (req, res) => {
	try {
		const { email, password, name } = req.body;

		const result = await signup({ email, password, name });

		res.status(201).json(result);
	} catch (error) {
		res.status(400).json({
			message: error instanceof Error ? error.message : 'Failed to sign up',
		});
	}
});

authRouter.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		const result = await login({ email, password });

		res.status(200).json(result);
	} catch (error) {
		res.status(401).json({
			message: error instanceof Error ? error.message : 'Failed to log in',
		});
	}
});

authRouter.get('/me', requireAuth, async (req, res) => {
	try {
		const userId = req.auth?.userId;

		if (!userId) {
			return res.status(401).json({
				message: 'Unauthorized',
			});
		}

		const user = await getCurrentUser(userId);

		return res.status(200).json({ user });
	} catch (error) {
		const message =
			error instanceof Error ? error.message : 'Failed to fetch user';

		if (message === 'User not found') {
			return res.status(404).json({ message });
		}

		return res.status(500).json({ message: 'Internal server error' });
	}
});
