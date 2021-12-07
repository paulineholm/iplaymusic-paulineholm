/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

const WavyHead = () => {
	const theme = useTheme();

	const pattern = css`
		width: 100%;
		min-height: 300px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		background-image: linear-gradient(#ee0979, #ff6a00);
		&:before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 64.5px;
			background: ${theme.wave};
			background-size: cover;
			background-repeat: no-repeat;
		}
	`;

	return (
		<>
			<section css={pattern}></section>
		</>
	);
};

export default WavyHead;
