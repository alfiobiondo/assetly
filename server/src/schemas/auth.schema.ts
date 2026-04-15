import { z } from 'zod';
import { emptyObjectSchema } from './shared';

export const signupSchema = z.object({
	body: z.object({
		email: z.email(),
		password: z.string().min(6),
		name: z.string().trim().min(1).max(100).optional(),
	}),
	query: emptyObjectSchema,
	params: emptyObjectSchema,
});

export const loginSchema = z.object({
	body: z.object({
		email: z.email(),
		password: z.string().min(1),
	}),
	query: emptyObjectSchema,
	params: emptyObjectSchema,
});
