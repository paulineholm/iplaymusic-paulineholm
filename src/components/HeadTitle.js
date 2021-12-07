/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const HeadTitle = (props) => {
	const headHeadline = css`
		font-size: 36px;
		font-weight: bold;
		padding: 20px 30px;
		margin: 0px;
		background: ${props.whiteHead ? 'white' : 'linear-gradient(#EE0979, #FF6A00)'};
		background-clip: text;
		-webkit-text-fill-color: transparent;
		position: relative;
		z-index: 2;
	`;

	return <h3 css={headHeadline}>{props.titleHeadline}</h3>;
};

export default HeadTitle;
