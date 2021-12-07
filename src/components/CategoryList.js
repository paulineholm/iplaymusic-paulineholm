/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from '@reach/router';

const CategoryList = ({ catoId }) => {
	const { authToken } = useContext(AuthContext);
	const [listsplay, setListsplay] = useState();

	useEffect(() => {
		if (catoId) {
			axios(`https://api.spotify.com/v1/browse/categories/${catoId}/playlists`, {
				headers: {
					Authorization: 'Bearer ' + authToken.access_token,
				},
			}).then((result) => setListsplay(result.data.playlists.items));
		}
	}, [catoId, authToken]);

	const theme = useTheme();

	const listsWrapper = css`
		display: flex;
		margin-left: 50px;
		margin-right: 10px;
	`;

	const listsName = css`
		width: 80%;
		font-size: 15px;
		font-weight: 300;
		margin-top: 0;
		text-decoration: none;
		color: ${theme.text};
	`;

	const listsIcon = css`
		width: 20%;
		padding-top: 15px;
		font-size: 20px;
	`;

	return (
		<>
			{listsplay?.map((listsplay) => (
				<div key={listsplay.id} css={listsWrapper}>
					<Link css={listsName} key={listsplay.id} to={`/playlists/${listsplay.id}`}>
						<p>{listsplay.name}</p>
					</Link>
					<IoIosArrowForward css={listsIcon} />
				</div>
			))}
		</>
	);
};

export default CategoryList;
