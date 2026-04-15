import { z } from 'zod';

export const emptyObjectSchema = z.object({}).optional().default({});
