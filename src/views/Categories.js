import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import HeadTitle from '../components/HeadTitle';
import NavMenu from '../components/NavMenu';
import { AuthContext } from '../contexts/AuthContext';
import CategoriesCard from '../components/CategoriesCard';

const Categories = () => {
	const { authToken } = useContext(AuthContext);
	const [categories, setCategories] = useState();

	useEffect(() => {
		if (authToken) {
			axios('https://api.spotify.com/v1/browse/categories?country=DK', {
				headers: {
					Authorization: 'Bearer ' + authToken.access_token,
				},
			}).then((result) => setCategories(result.data.categories.items));
		}
	}, [authToken]);

	return (
		<>
			<Header headTitle="Categories" />
			<HeadTitle titleHeadline="Categories" />
			{categories?.map((categories) => (
				<CategoriesCard catoId={categories.id} catoName={categories.name} key={categories.id} />
			))}
			<NavMenu />
		</>
	);
};

export default Categories;
