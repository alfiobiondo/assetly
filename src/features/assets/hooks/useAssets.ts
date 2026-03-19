import { useQuery } from '@tanstack/react-query';
import { fetchAssets } from '../api/fetchAssets';

interface UseAssetsParams {
	query: string;
}

export function useAssets({ query }: UseAssetsParams) {
	return useQuery({
		queryKey: ['assets', query],
		queryFn: ({ signal }) => fetchAssets({ query, signal }),
	});
}
