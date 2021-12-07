import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

const useAxios = (url) => {
	const { authToken } = useContext(AuthContext);
	const [data, setData] = useState(null);
	const [isloading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (authToken) {
			axios(url, {
				headers: {
					Authorization: 'Bearer ' + authToken.access_token,
				},
			})
				.then((result) => {
					if (result.status !== 200) throw new Error('Unable to fetch data for that resource.');
					setData(result.data);
					setIsLoading(false);
					setError(null);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err.message);
				});
		}
	}, [authToken, url]);

	return { data, isloading, error };
};

export default useAxios;
