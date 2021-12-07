import './App.css';
import GlobalStyles from './components/GlobalStyles';
import { Router, LocationProvider } from '@reach/router';
import TokenContextProvider from './contexts/TokenContext';
import AuthContextProvider from './contexts/AuthContext';
import Featured from './views/Featured';
import Login from './views/Login';
import AlbumDetails from './views/AlbumDetails';
import Albums from './views/Albums';
import Categories from './views/Categories';
import Playlists from './views/Playlists';
import Player from './views/Player';
import Callback from './views/Callback';
import { ThemeProvider } from '@emotion/react';
import useDarkMode from './customhooks/useDarkMode';
import NavMenu from './components/NavMenu';

const lightTheme = {
	body: '#FFFFFF',
	text: '#341931',
	login: '#FFFFFF',
	touchicon: '#FF1168',
	btn: '#341931',
	wave: "url('/wavebg.png')",
	menu: 'white',
	playerCover: "url('/playerbg.png')",
};

const darkTheme = {
	body: '#341931',
	text: '#FFFFFF',
	login: '#FF1168',
	touchicon: '#FF328E',
	btn: '#FFFFFF',
	wave: "url('/wavebgDark.png')",
	menu: '#111625',
	playerCover: "url('/playerbg.png')",
};

function App() {
	const [darkMode, toggleDarkMode] = useDarkMode();

	return (
		<LocationProvider>
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<AuthContextProvider>
					<TokenContextProvider>
						<GlobalStyles />
						<Router>
							<Login path="/" />
							<Featured path="featured" />
							<AlbumDetails path="albumdetails/:id" />
							<Albums path="albums" />
							<Categories path="categories" />
							<Playlists path="playlists/:id" />
							<Player path="player/:id" />
							<Callback path="callback" />
						</Router>
						<NavMenu toggleDarkMode={toggleDarkMode} />
					</TokenContextProvider>
				</AuthContextProvider>
			</ThemeProvider>
		</LocationProvider>
	);
}

export default App;
