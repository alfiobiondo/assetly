import { Link, useParams } from 'react-router-dom';
import { mockAssets } from '../mocks/assets';
import { formatCurrency, formatPercentage } from '../lib/formatters';

export function AssetDetailPage() {
	const { id } = useParams();

	const asset = mockAssets.find((item) => item.id === id);

	if (!asset) {
		return (
			<main>
				<h1>Asset not found</h1>
				<p>The requested asset does not exist.</p>
				<Link to='/'>Go back to dashboard</Link>
			</main>
		);
	}

	const isPositive = asset.changePercent >= 0;

	return (
		<main>
			<Link to='/'>← Back to dashboard</Link>

			<section
				style={{
					display: 'block',
					marginTop: '24px',
				}}
			>
				<article
					style={{
						maxWidth: '720px',
						background: 'white',
						borderRadius: '16px',
						padding: '24px',
						border: '1px solid #e5e7eb',
						boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
					}}
				>
					<p>{asset.symbol}</p>
					<h1>{asset.name}</h1>
					<p>{asset.type}</p>
					<p>{formatCurrency(asset.price)}</p>
					<p style={{ color: isPositive ? '#15803d' : '#b91c1c' }}>
						{formatPercentage(asset.changePercent)}
					</p>
					<p>{asset.description}</p>
				</article>
			</section>
		</main>
	);
}
