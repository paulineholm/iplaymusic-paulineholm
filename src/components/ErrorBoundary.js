/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const errormessage = css`
	background: linear-gradient(#ee0979, #ff6a00);
	background-clip: text;
	-webkit-text-fill-color: transparent;
`;

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}
	componentDidCatch(error, errorInfo) {
		// do sth here for login
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <p css={errormessage}>{this.props.message}</p>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
