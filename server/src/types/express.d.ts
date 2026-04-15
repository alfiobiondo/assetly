import 'express-serve-static-core';

declare module 'express-serve-static-core' {
	interface Locals {
		validated?: {
			body: unknown;
			query: unknown;
			params: unknown;
		};
	}
}

export {};
