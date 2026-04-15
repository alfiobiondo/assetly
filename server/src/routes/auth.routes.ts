import { Router } from 'express';
import { login, signup, getCurrentUser } from '../services/auth.service';
import { requireAuth } from '../middleware/requireAuth';
import { authRateLimiter } from '../middleware/rateLimit';
import { validate } from '../middleware/validate';
import { loginSchema, signupSchema } from '../schemas/auth.schema';
import { asyncHandler } from '../lib/asyncHandler';

export const authRouter = Router();

authRouter.post(
	'/signup',
	authRateLimiter,
	validate(signupSchema),
	asyncHandler(async (req, res) => {
		const { email, password, name } = req.body;
		const result = await signup({ email, password, name });
		res.status(201).json(result);
	})
);

authRouter.post(
	'/login',
	authRateLimiter,
	validate(loginSchema),
	asyncHandler(async (req, res) => {
		const { email, password } = req.body;
		const result = await login({ email, password });
		res.status(200).json(result);
	})
);

authRouter.get(
	'/me',
	requireAuth,
	asyncHandler(async (req, res) => {
		const userId = req.auth?.userId;

		if (!userId) {
			return res.status(401).json({
				message: 'Unauthorized',
			});
		}

		const user = await getCurrentUser(userId);
		return res.status(200).json({ user });
	})
);
