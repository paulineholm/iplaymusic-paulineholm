/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosKey } from 'react-icons/io';

const LoginForm = () => {
	const theme = useTheme();

	const inputHead = css`
		font-size: 15px;
		font-weight: bold;
		margin: 0px 30px;
	`;

	const inputWrapper = css`
		display: flex;
		border-bottom: 2px solid ${theme.text};
		margin: 5px 30px 15px 30px;
	`;

	const inputInput = css`
		border: none;
		width: 90%;
		font-size: 15px;
		font-weight: 300;
		padding: 20px 0px;
		background-color: transparent;
		::placeholder {
			color: ${theme.text};
		}
	`;

	const inputIcon = css`
		width: 10%;
		padding-top: 20px;
		font-weight: 15px;
	`;

	return (
		<form>
			<label htmlFor="username" css={inputHead}>
				Username
			</label>
			<div css={inputWrapper}>
				<input type="text" name="username" id="username" placeholder="Enter your username" css={inputInput} />
				<FaUserCircle css={inputIcon} />
			</div>

			<label htmlFor="password" css={inputHead}>
				Password:
			</label>
			<div css={inputWrapper}>
				<input type="password" name="password" id="password" placeholder="Enter your password" css={inputInput} />
				<IoIosKey css={inputIcon} />
			</div>
		</form>
	);
};

export default LoginForm;
