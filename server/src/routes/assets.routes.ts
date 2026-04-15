import { Router } from 'express';
import { getAssetById, getAssets } from '../services/assets.service';
import { validate } from '../middleware/validate';
import { getAssetByIdSchema, getAssetsSchema } from '../schemas/assets.schema';
import { asyncHandler } from '../lib/asyncHandler';

export const assetsRouter = Router();

assetsRouter.get(
	'/',
	validate(getAssetsSchema),
	asyncHandler(async (_req, res) => {
		const validated = res.locals.validated as {
			query: {
				search?: string;
				q?: string;
				type?: 'stock' | 'etf' | 'crypto';
			};
		};

		const search = validated.query.search ?? validated.query.q;
		const type = validated.query.type;

		const result = await getAssets({ search, type });

		res.status(200).json(result);
	})
);

assetsRouter.get(
	'/:id',
	validate(getAssetByIdSchema),
	asyncHandler(async (_req, res) => {
		const validated = res.locals.validated as {
			params: {
				id: string;
			};
		};

		const asset = await getAssetById(validated.params.id);

		if (!asset) {
			return res.status(404).json({
				message: `Asset with id "${validated.params.id}" not found.`,
			});
		}

		res.status(200).json(asset);
	})
);
