/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { navigate } from '@reach/router';

const Header = (props) => {
	const theme = useTheme();

	const headFlex = css`
		display: flex;
		top: 0;
		left: 0;
		right: 0;
		padding-top: 10px;
		text-align: center;
		color: ${props.whiteHeader ? 'white' : theme.text};
		position: relative;
		z-index: 2;
	`;

	const backIcon = css`
		width: 20%;
		margin-top: 20px;
		font-size: 20px;
	`;

	const headText = css`
		width: 60%;
		text-transform: uppercase;
		font-size: 16px;
		font-weight: 300;
		letter-spacing: 1.5px;
	`;

	const searchIcon = css`
		width: 20%;
		margin-top: 20px;
		font-size: 20px;
	`;
	const goBack = () => {
		navigate(-1);
	};

	return (
		<>
			<div css={headFlex}>
				<IoIosArrowBack css={backIcon} onClick={goBack} />
				<h3 css={headText}>{props.headTitle}</h3>
				<AiOutlineSearch css={searchIcon} />
			</div>
		</>
	);
};

export default Header;
