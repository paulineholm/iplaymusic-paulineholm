/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useAxios from '../customhooks/useAxios';
import { useEffect } from 'react';
import { Link } from '@reach/router';
import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
import HeadTitle from '../components/HeadTitle';

const Featured = () => {
	const url = 'https://api.spotify.com/v1/browse/featured-playlists?country=DK&locale=da_DA';
	const { data, isLoading, error } = useAxios(url);

	useEffect(() => {
		if (error) throw new Error(error);
	}, [error]);

	const featuredImg = css`
		width: 90%;
		margin: 15px 5%;
		border-radius: 10px;
	`;

	return isLoading ? (
		<p>spinner...</p>
	) : (
		<>
			<Header headTitle="Featured" />
			<HeadTitle titleHeadline="Featured" />
			{data?.playlists.items.map((playlist) => (
				<Link key={playlist.id} to={`/playlists/${playlist.id}`}>
					<img src={playlist.images[0].url} alt={playlist.description} css={featuredImg} />
				</Link>
			))}

			<NavMenu />
		</>
	);
};

/* for FeaturedLists componentet FeaturedList.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.Object).isRequired,
}*/

export default Featured;
