import { z } from 'zod';
import { emptyObjectSchema } from './shared';

export const watchlistAssetParamsSchema = z.object({
	body: emptyObjectSchema,
	query: emptyObjectSchema,
	params: z.object({
		assetId: z.string().trim().min(1),
	}),
});

export const getWatchlistSchema = z.object({
	body: emptyObjectSchema,
	query: emptyObjectSchema,
	params: emptyObjectSchema,
});
