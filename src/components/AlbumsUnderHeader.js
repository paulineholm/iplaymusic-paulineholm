/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
/* import { Link } from '@reach/router'; */
import UnderHeadLink from './UnderHeadLink';

const AlbumsUnderHeader = ({ title }) => {
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
				<UnderHeadLink />
			</div>
		</>
	);
};

export default AlbumsUnderHeader;
