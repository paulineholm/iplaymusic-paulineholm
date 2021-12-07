/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import AlbumsUnderHeader from './AlbumsUnderHeader';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from '@reach/router';

const ReleasesAlbums = ({ id }) => {
	const { authToken } = useContext(AuthContext);
	const [featalbums, setFeatalbums] = useState();

	useEffect(() => {
		if (authToken) {
			axios('https://api.spotify.com/v1/browse/new-releases?country=DK&offset=0&limit=40 ', {
				headers: {
					Authorization: 'Bearer ' + authToken.access_token,
				},
			}).then((result) => setFeatalbums(result.data.albums.items));
		}
	}, [authToken]);

	const theme = useTheme();

	const albumLink = css`
		text-decoration: none;
		color: ${theme.text};
	`;

	const albumImgWrapper = css`
		display: flex;
		margin: 25px;
	`;

	const albumImg = css`
		width: 55px;
		border-radius: 5px;
		margin-right: 20px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	`;

	const albumImgName = css`
		font-size: 15px;
		font-weight: bold;
		padding: 0;
		margin: 5px 0px;
	`;
	const albumImgArt = css`
		font-size: 12px;
		font-weight: 300;
		padding: 0;
		margin: 0;
	`;

	return (
		<>
			<AlbumsUnderHeader title="New Releases" />
			{featalbums?.map((item) => (
				<Link key={item.id} to={`/albumdetails/${item.id}`} css={albumLink}>
					<div key={item.id} css={albumImgWrapper}>
						<img src={item.images[0].url} alt={item.name} css={albumImg} />
						<article>
							<h3 css={albumImgName}>{item.name}</h3>
							<p css={albumImgArt}>{item.artists[0].name}</p>
						</article>
					</div>
				</Link>
			))}
		</>
	);
};

export default ReleasesAlbums;
