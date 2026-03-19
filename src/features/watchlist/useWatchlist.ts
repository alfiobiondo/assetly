import { useEffect, useState } from 'react';
import { getStoredWatchlist, setStoredWatchlist } from './watchlist.storage';

export function useWatchlist() {
	const [watchlist, setWatchlist] = useState<string[]>([]);

	useEffect(() => {
		const storedWatchlist = getStoredWatchlist();
		setWatchlist(storedWatchlist);
	}, []);

	function isInWatchlist(assetId: string) {
		return watchlist.includes(assetId);
	}

	function toggleWatchlist(assetId: string) {
		const updatedWatchlist = isInWatchlist(assetId)
			? watchlist.filter((id) => id !== assetId)
			: [...watchlist, assetId];

		setWatchlist(updatedWatchlist);
		setStoredWatchlist(updatedWatchlist);
	}

	return {
		watchlist,
		isInWatchlist,
		toggleWatchlist,
	};
}
