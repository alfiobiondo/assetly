import type { Request, Response, NextFunction } from 'express';
import { type ZodObject, type ZodRawShape } from 'zod';

type RequestSchema = ZodObject<ZodRawShape>;

type ValidatedRequestData = {
	body: unknown;
	query: unknown;
	params: unknown;
};

export function validate(schema: RequestSchema) {
	return (req: Request, res: Response, next: NextFunction) => {
		const result = schema.safeParse({
			body: req.body ?? {},
			query: req.query ?? {},
			params: req.params ?? {},
		});

		if (!result.success) {
			return res.status(400).json({
				message: 'Invalid request data',
				errors: result.error.flatten(),
			});
		}

		res.locals.validated = result.data as ValidatedRequestData;
		next();
	};
}
