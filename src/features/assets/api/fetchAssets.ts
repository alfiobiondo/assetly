import { mockAssets } from '../../../mocks/assets';
import type { Asset } from '../types';

interface FetchAssetsParams {
	query?: string;
	signal?: AbortSignal;
}

function wait(ms: number, signal?: AbortSignal) {
	return new Promise<void>((resolve, reject) => {
		const timeoutId = window.setTimeout(() => {
			resolve();
		}, ms);

		signal?.addEventListener('abort', () => {
			window.clearTimeout(timeoutId);
			reject(new DOMException('Request aborted', 'AbortError'));
		});
	});
}

export async function fetchAssets({
	query = '',
	signal,
}: FetchAssetsParams): Promise<Asset[]> {
	await wait(500, signal);

	const normalizedQuery = query.trim().toLowerCase();

	if (!normalizedQuery) {
		return mockAssets;
	}

	return mockAssets.filter((asset) => {
		return (
			asset.name.toLowerCase().includes(normalizedQuery) ||
			asset.symbol.toLowerCase().includes(normalizedQuery) ||
			asset.type.toLowerCase().includes(normalizedQuery)
		);
	});
}
