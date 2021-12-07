/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const AlbumDetailHeader = ({ title }) => {
	const underheaderWrapper = css`
		display: flex;
		margin: 5px 30px;
	`;

	const underheaderHead = css`
		font-size: 15px;
		font-weight: bold;
		width: 80%;
		margin: 0 0 10px 0;
	`;

	return (
		<>
			<div css={underheaderWrapper}>
				<h1 css={underheaderHead}>{title}</h1>
			</div>
		</>
	);
};

export default AlbumDetailHeader;
