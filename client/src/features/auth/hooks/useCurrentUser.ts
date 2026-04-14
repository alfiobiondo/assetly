import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiError, getCurrentUser } from '../api/auth';
import { removeToken, getToken } from '../lib/authStorage';

export function useCurrentUser() {
	const token = getToken();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const query = useQuery({
		queryKey: ['currentUser'],
		queryFn: getCurrentUser,
		enabled: !!token,
		retry: false,
	});

	useEffect(() => {
		if (query.error instanceof ApiError && query.error.status === 401) {
			removeToken();
			queryClient.removeQueries({ queryKey: ['currentUser'] });
			navigate('/login', { replace: true });
		}
	}, [query.error, navigate, queryClient]);

	return query;
}
