/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from '@emotion/react';
import { useLocation } from '@reach/router';

const GlobalStyles = () => {
	const theme = useTheme();
	const location = useLocation();

	return (
		<Global
			styles={css`
				#root {
					background-color: ${location.pathname === '/' ? theme.login : theme.body};
					color: ${theme.text};
					min-height: 100vh;
					transition: all 0.25s linear;
				}
			`}
		/>
	);
};

export default GlobalStyles;
