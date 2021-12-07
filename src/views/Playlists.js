import Header from '../components/Header';
import HeadTitle from '../components/HeadTitle';
import WavyHead from '../components/WavyHead';
import PlaylistsList from '../components/PlaylistsList';
import UniversalButton from '../components/UniversalBtn';
import NavMenu from '../components/NavMenu';

const Playlists = ({ id }) => {
	return (
		<>
			<WavyHead />
			<Header whiteHeader headTitle="Playlists" />
			<HeadTitle whiteHead titleHeadline="Playlists" />
			<PlaylistsList id={id} />
			<UniversalButton pink pinkBorder text="Listen all" />
			<NavMenu />
		</>
	);
};

export default Playlists;
