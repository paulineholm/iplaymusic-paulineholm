/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

const UniversalButton = (props) => {
	const theme = useTheme();

	const button = css`
		text-transform: uppercase;
		margin: 50px 7.5%;
		width: 85%;
		color: ${props.pink ? '#FF1168' : theme.btn};
		font-size: 15px;
		font-weight: bold;
		border: 2px solid ${props.pinkBorder ? '#FF1168' : theme.loginbtn};
		border-radius: 25px;
		background: transparent;
		padding: 10px 20px;
	`;

	return <button css={button}>{props.text}</button>;
};

export default UniversalButton;
