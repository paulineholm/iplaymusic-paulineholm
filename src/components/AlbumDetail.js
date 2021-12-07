/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { AiFillPlayCircle } from 'react-icons/ai';
import AlbumDetailHeader from './AlbumDetailHeader';
import { Link } from '@reach/router';

const AlbumDetail = ({ id }) => {
	const { authToken } = useContext(AuthContext);
	const [albumDetail, setAlbumDetail] = useState();
	const [albumName, setAlbumName] = useState();
	const [albumTracks, setAlbumTracks] = useState();

	useEffect(() => {
		if (authToken) {
			axios(`https://api.spotify.com/v1/albums/${id}/tracks?offset=0&limit=20`, {
				headers: {
					Authorization: 'Bearer ' + authToken.access_token,
				},
			}).then((result) => {
				setAlbumDetail(result.data /* .items */);
				setAlbumName(result.data.items[0].name);
				setAlbumTracks(result.data.items[0].artists[0].name);
			});
		}
	}, [id, authToken]);

	const albumCover = css`
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	`;
	const albumItemWrapper = css`
		display: flex;
		padding-top: 5px;
		padding-bottom: 5px;
		width: 100%;
	`;

	const playIcon = css`
		width: 12%;
		font-size: 30px;
		margin-top: 3px;
		margin-bottom: 5px;
		margin-left: 25px;
	`;
	const albumSection = css`
		width: 60%;
	`;

	const albumItemName = css`
		font-size: 15px;
		font-weight: bold;
		margin: 0;
	`;
	const albumItemsArtist = css`
		margin: 0;
		font-size: 12px;
		font-weight: 300;
	`;

	const albumDuration = css`
		width: 20%;
		font-size: 12px;
		margin-top: 10px;
		font-weight: 300;
	`;

	const albumDetailWrapper = css`
		margin-top: 250px;
	`;

	const albumNameP = css`
		color: white;
		position: relative;
		font-size: 25px;
		text-align: left;
		padding-left: 20px;
		font-weight: bold;
		margin-bottom: 0px;
		margin-top: 0px;
		z-index: 1;
	`;

	return (
		<>
			<svg width="0" height="0">
				<linearGradient id="pinkish-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
					<stop stopColor="#ee0979" offset="0%" />
					<stop stopColor="#ff6a00" offset="100%" />
				</linearGradient>
			</svg>

			<img
				src="https://i.pinimg.com/originals/6c/f1/34/6cf134c6e8de08b001531158d3de1417.jpg"
				alt="AlbumCoverReserve"
				css={albumCover}
			/>
			<p css={albumNameP}>{albumName}</p>
			<div css={albumDetailWrapper}>
				<AlbumDetailHeader title="All Songs" />
				{albumDetail?.map((item) => (
					<div key={item.id} css={albumItemWrapper}>
						<Link key={item.id} to={`/player/${item.id}`} css={playIcon}>
							<AiFillPlayCircle style={{ fill: 'url(#pinkish-gradient)' }} />
						</Link>
						<section css={albumSection}>
							<h6 css={albumItemName}>{item.name}</h6>
							<p css={albumItemsArtist}>{albumTracks}</p>
						</section>
						<section css={albumDuration}>{item.duration_ms}</section>
					</div>
				))}
			</div>
		</>
	);
};

export default AlbumDetail;
