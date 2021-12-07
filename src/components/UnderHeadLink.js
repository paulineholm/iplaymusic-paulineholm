import { Link } from '@reach/router';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const UnderHeadLink = () => {
	const underheaderDetail = css`
		width: 20%;
		margin: 0;
	`;

	const link = css`
		color: #ff1168;
		text-decoration: none;
		font-size: 15px;
		font-weight: 300;
	`;

	return (
		<p css={underheaderDetail}>
			<Link to="../#" css={link}>
				View All
			</Link>
		</p>
	);
};

export default UnderHeadLink;
