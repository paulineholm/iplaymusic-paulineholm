/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Link } from '@reach/router';

const PlaylistsList = ({ id }) => {
	const { authToken } = useContext(AuthContext);
	const [singlePlaylists, setSinglePlaylists] = useState();
	const [titlePlaylist, setTitlePlaylist] = useState();
	const [titleImg, setTitleImg] = useState();

	useEffect(() => {
		if (authToken) {
			axios(`https://api.spotify.com/v1/playlists/${id}`, {
				headers: {
					Authorization: 'Bearer ' + authToken.access_token,
				},
			}).then((result) => {
				setTitleImg(result.data.images[0].url);
				setTitlePlaylist(result.data.name);
				setSinglePlaylists(result.data.tracks.items);
			});
		}
	}, [id, authToken]);

	const playListWrapper = css`
		margin: 0px 25px;
	`;

	const playListTitle = css`
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		padding-bottom: 15px;
		margin: 15px 0;
	`;

	const playListImg = css`
		width: 50%;
		margin-left: 25%;
		margin-right: 25%;
		position: relative;
		z-index: 2;
	`;

	const playListItemsWrapper = css`
		display: flex;
		margin-bottom: 10px;
	`;
	const playListIcon = css`
		width: 15%;
		font-size: 30px;
		margin-top: 3px;
		margin-bottom: 5px;
	`;

	const playListSection = css`
		width: 85%;
	`;

	const playListItemsName = css`
		font-size: 15px;
		font-weight: bold;
		margin: 0;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	`;
	const playListItemsArtist = css`
		font-size: 12px;
		font-weight: 300;
		margin: 0;
	`;

	return (
		<>
			<svg width="0" height="0">
				<linearGradient id="pinkish-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
					<stop stopColor="#ee0979" offset="0%" />
					<stop stopColor="#ff6a00" offset="100%" />
				</linearGradient>
			</svg>
			<div css={playListWrapper}>
				<img src={titleImg} alt={titlePlaylist} css={playListImg} />
				<div css={playListTitle}> {titlePlaylist}</div>
				{singlePlaylists?.map((playlist) => (
					<div key={playlist.track.id} css={playListItemsWrapper}>
						<Link key={playlist.track.id} to={`/player/${playlist.track.id}`} css={playListIcon}>
							<AiFillPlayCircle style={{ fill: 'url(#pinkish-gradient)' }} />
						</Link>
						<section css={playListSection}>
							<h6 css={playListItemsName}>{playlist.track.name}</h6>
							<p css={playListItemsArtist}>{playlist.track.artists[0].name}</p>
						</section>
					</div>
				))}
			</div>
		</>
	);
};

export default PlaylistsList;
