/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { IoIosFingerPrint } from 'react-icons/io';

const LoginTouch = () => {
	const theme = useTheme();

	const touchWrapper = css`
		text-align: center;
	`;

	const touchIcon = css`
		color: white;
		font-size: 30px;
		background: ${theme.touchicon};
		border-radius: 50%;
		padding: 25px;
	`;

	const touchHead = css`
		font-size: 15px;
		font-weight: 300;
		color: #341931;
	`;

	return (
		<div css={touchWrapper}>
			<IoIosFingerPrint css={touchIcon} />
			<h3 css={touchHead}>One-Touch Login</h3>
		</div>
	);
};

export default LoginTouch;
