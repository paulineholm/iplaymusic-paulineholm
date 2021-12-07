/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import querystring from 'querystring';
import LoginForm from '../components/LoginForm';
import UniversalButton from '../components/UniversalBtn';
import LoginTouch from '../components/LoginTouch';

const Login = () => {
	const options = querystring.stringify({
		response_type: 'code',
		client_id: process.env.REACT_APP_CLIENT_ID,
		scope:
			'user-read-email user-read-private user-library-read playlist-read-private playlist-read-collaborative streaming',
		redirect_uri:
			process.env.NODE_ENV === 'production'
				? 'https://iplaymusic-paulineholm-test.netlify.app/callback'
				: 'http://localhost:8888/callback',
		state: 'davsbfgjnwddghxf1234567890341253646',
	});

	const loginHead = css`
		font-size: 36px;
		margin: 0;
		padding: 25px 0px 100px 30px;
	`;

	return (
		<>
			<h1 css={loginHead}>Log in</h1>
			<LoginForm />
			<a href={`https://accounts.spotify.com/authorize?${options}`}>
				<UniversalButton text="Log in" />
			</a>
			<LoginTouch />
		</>
	);
};

export default Login;
