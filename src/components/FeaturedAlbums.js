/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AlbumsUnderHeader from './AlbumsUnderHeader';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from '@reach/router';

const FeaturedAlbums = ({ id }) => {
	const { authToken } = useContext(AuthContext);
	const [featalbums, setFeatalbums] = useState();

	useEffect(() => {
		if (authToken) {
			axios('https://api.spotify.com/v1/browse/new-releases?country=DK', {
				headers: {
					Authorization: 'Bearer ' + authToken.access_token,
				},
			}).then((result) => setFeatalbums(result.data.albums.items));
		}
	}, [authToken]);

	const featAlbumWrapper = css`
		display: flex;
		flex-direction: row;
		overflow-y: scroll;
		scrollbar-width: none;
	`;

	const albumImg = css`
		width: 100px;
		border-radius: 5px;
		margin: 10px 0px 18px 20px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	`;

	return (
		<>
			<AlbumsUnderHeader title="Featured Albums" />
			<div css={featAlbumWrapper}>
				{featalbums?.map((item) => (
					<Link key={item.id} to={`/albumdetails/${item.id}`}>
						<div key={item.id}>
							<img src={item.images[0].url} alt={item.name} css={albumImg} />
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default FeaturedAlbums;
