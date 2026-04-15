import { Router } from 'express';
import { requireAuth } from '../middleware/requireAuth';
import {
	addToWatchlist,
	getWatchlist,
	removeFromWatchlist,
} from '../services/watchlist.service';
import { validate } from '../middleware/validate';
import {
	getWatchlistSchema,
	watchlistAssetParamsSchema,
} from '../schemas/watchlist.schema';
import { asyncHandler } from '../lib/asyncHandler';

export const watchlistRouter = Router();

watchlistRouter.use(requireAuth);

watchlistRouter.get(
	'/',
	validate(getWatchlistSchema),
	asyncHandler(async (req, res) => {
		const userId = req.auth!.userId;
		const data = await getWatchlist(userId);
		res.status(200).json(data);
	})
);

watchlistRouter.post(
	'/:assetId',
	validate(watchlistAssetParamsSchema),
	asyncHandler(async (req, res) => {
		const validated = res.locals.validated as {
			params: {
				assetId: string;
			};
		};

		const userId = req.auth!.userId;
		const result = await addToWatchlist(userId, validated.params.assetId);

		if (!result.success) {
			return res.status(result.status).json({ message: result.message });
		}

		res.status(200).json(result.data);
	})
);

watchlistRouter.delete(
	'/:assetId',
	validate(watchlistAssetParamsSchema),
	asyncHandler(async (req, res) => {
		const validated = res.locals.validated as {
			params: {
				assetId: string;
			};
		};

		const userId = req.auth!.userId;
		const result = await removeFromWatchlist(userId, validated.params.assetId);

		if (!result.success) {
			return res.status(result.status).json({ message: result.message });
		}

		res.status(200).json(result.data);
	})
);
