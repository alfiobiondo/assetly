import { z } from 'zod';
import { emptyObjectSchema } from './shared';

const assetTypeSchema = z.enum(['stock', 'etf', 'crypto']);

export const getAssetsSchema = z.object({
	body: emptyObjectSchema,
	query: z
		.object({
			search: z.string().trim().optional(),
			q: z.string().trim().optional(),
			type: assetTypeSchema.optional(),
		})
		.optional()
		.default({}),
	params: emptyObjectSchema,
});

export const getAssetByIdSchema = z.object({
	body: emptyObjectSchema,
	query: emptyObjectSchema,
	params: z.object({
		id: z.string().trim().min(1),
	}),
});
