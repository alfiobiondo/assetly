import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../api/auth';
import { removeToken, setToken } from '../lib/authStorage';

export function useAuth() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const loginMutation = useMutation({
		mutationFn: ({ email, password }: { email: string; password: string }) =>
			login(email, password),
		onSuccess: async (data) => {
			setToken(data.token);
			await queryClient.invalidateQueries({ queryKey: ['currentUser'] });
			navigate('/');
		},
	});

	const signupMutation = useMutation({
		mutationFn: ({
			email,
			password,
			name,
		}: {
			email: string;
			password: string;
			name?: string;
		}) => signup(email, password, name),
		onSuccess: async (data) => {
			setToken(data.token);
			await queryClient.invalidateQueries({ queryKey: ['currentUser'] });
			navigate('/');
		},
	});

	function logout() {
		removeToken();
		queryClient.removeQueries({ queryKey: ['currentUser'] });
		navigate('/login');
	}

	return {
		login: loginMutation.mutate,
		signup: signupMutation.mutate,
		logout,
		isLoading: loginMutation.isPending || signupMutation.isPending,
		error: loginMutation.error ?? signupMutation.error ?? null,
	};
}
