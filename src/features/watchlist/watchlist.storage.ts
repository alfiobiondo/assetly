const WATCHLIST_STORAGE_KEY = 'wealthype-watchlist';

export function getStoredWatchlist(): string[] {
	const storedValue = localStorage.getItem(WATCHLIST_STORAGE_KEY);

	if (!storedValue) {
		return [];
	}

	try {
		const parsedValue = JSON.parse(storedValue);

		if (!Array.isArray(parsedValue)) {
			return [];
		}

		return parsedValue;
	} catch {
		return [];
	}
}

export function setStoredWatchlist(assetIds: string[]) {
	localStorage.setItem(WATCHLIST_STORAGE_KEY, JSON.stringify(assetIds));
}
