import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { AssetDetailPage } from '../pages/AssetDetailPage';
import { DashboardPage } from '../pages/DashboardPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <DashboardPage />,
			},
			{
				path: 'asset/:id',
				element: <AssetDetailPage />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
]);
