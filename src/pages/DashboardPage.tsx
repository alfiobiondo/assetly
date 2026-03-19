import { useState } from 'react';
import { AssetCard } from '../components/AssetCard/AssetCard';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { useAssets } from '../features/assets/hooks/useAssets';
import { useWatchlist } from '../features/watchlist/useWatchlist';
import { useDebouncedValue } from '../lib/useDebouncedValue';

export function DashboardPage() {
	const [searchValue, setSearchValue] = useState('');
	const debouncedSearchValue = useDebouncedValue(searchValue, 400);

	const { isInWatchlist, toggleWatchlist } = useWatchlist();

	const {
		data: assets = [],
		isLoading,
		isError,
		error,
	} = useAssets({
		query: debouncedSearchValue,
	});

	return (
		<main>
			<h1>Asset Watchlist</h1>

			<SearchBar value={searchValue} onChange={setSearchValue} />

			{isLoading && <p>Loading assets...</p>}

			{isError && (
				<p>
					Something went wrong:{' '}
					{error instanceof Error ? error.message : 'Unknown error'}
				</p>
			)}

			{!isLoading && !isError && assets.length === 0 && (
				<p>No assets found for your search.</p>
			)}

			{!isLoading && !isError && assets.length > 0 && (
				<section>
					{assets.map((asset) => (
						<AssetCard
							key={asset.id}
							asset={asset}
							isInWatchlist={isInWatchlist(asset.id)}
							onToggleWatchlist={() => toggleWatchlist(asset.id)}
						/>
					))}
				</section>
			)}
		</main>
	);
}
